import { GET } from "app/api/[category]/[board]/route";
import { designBoard } from "app/_constants/design-data";
import { roadmapTechBoard } from "app/_constants/roadmap-tech-data";

describe("api /[category]/[board]", () => {
  it("should return roadmap-tech data when board is roadmap-tech", async () => {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({
        category: "starred",
        board: "roadmap-tech",
      }),
    });

    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toEqual({
      category: "starred",
      board: "roadmap-tech",
      data: roadmapTechBoard,
    });
  });

  it("should return design data by default", async () => {
    const response = await GET(new Request("http://localhost"), {
      params: Promise.resolve({
        category: "starred",
        board: "design",
      }),
    });

    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload).toEqual({
      category: "starred",
      board: "design",
      data: designBoard,
    });
  });
});
