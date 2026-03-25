import { headers } from "next/headers";

import { getBoardData, isSupportedBoard } from "../helpers";

jest.mock("next/headers", () => ({
  headers: jest.fn(),
}));

const mockedHeaders = headers as jest.MockedFunction<typeof headers>;

const createHeaders = (entries: Record<string, string | undefined>): Headers =>
  ({
    get: (name: string) => entries[name] ?? null,
  }) as unknown as Headers;

describe("board helpers", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    jest.clearAllMocks();
    global.fetch = jest.fn() as unknown as typeof fetch;
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it("should detect supported boards", () => {
    expect(isSupportedBoard("design")).toBe(true);
    expect(isSupportedBoard("roadmap-tech")).toBe(true);
    expect(isSupportedBoard("unknown")).toBe(false);
  });

  it("should fetch board data with forwarded host and protocol", async () => {
    mockedHeaders.mockResolvedValue(
      createHeaders({
        "x-forwarded-host": "cycle.example.com",
        "x-forwarded-proto": "https",
      }),
    );

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => ({
        category: "starred",
        board: "design",
        data: [
          {
            title: "Docs",
            slug: "docs",
            icon: "📚",
            docs: [
              {
                id: "1",
                text: "Doc 1",
                icon: "📄",
                tags: [],
              },
            ],
          },
        ],
      }),
    });

    const data = await getBoardData("starred", "design");

    expect(global.fetch).toHaveBeenCalledWith(
      "https://cycle.example.com/api/starred/design",
      {
        cache: "no-store",
      },
    );
    expect(data).toEqual([
      {
        title: "Docs",
        slug: "docs",
        icon: "📚",
        docs: [
          {
            id: "1",
            text: "Doc 1",
            icon: "📄",
            tags: [],
          },
        ],
      },
    ]);
  });

  it("should throw if host header is missing", async () => {
    mockedHeaders.mockResolvedValue(createHeaders({}));

    await expect(getBoardData("starred", "design")).rejects.toThrow(
      "Missing host header for board API request",
    );
  });

  it("should throw if api response is not ok", async () => {
    mockedHeaders.mockResolvedValue(
      createHeaders({
        host: "localhost:3000",
      }),
    );

    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
      json: async () => ({}),
    });

    await expect(getBoardData("starred", "design")).rejects.toThrow(
      "Unable to load board starred/design",
    );
  });
});