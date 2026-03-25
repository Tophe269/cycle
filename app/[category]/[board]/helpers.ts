import { headers } from "next/headers";

import { DocGroup } from "app/_types/board";

export const supportedBoards = ["design", "roadmap-tech"] as const;

type BoardResponse = {
  category: string;
  board: string;
  data: DocGroup[];
};

export const isSupportedBoard = (
  board: string,
): board is (typeof supportedBoards)[number] =>
  supportedBoards.includes(board as (typeof supportedBoards)[number]);

export const getBoardData = async (
  category: string,
  board: (typeof supportedBoards)[number],
): Promise<DocGroup[]> => {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "http";

  if (!host) {
    throw new Error("Missing host header for board API request");
  }

  const response = await fetch(
    `${protocol}://${host}/api/${category}/${board}`,
    {
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new Error(`Unable to load board ${category}/${board}`);
  }

  const payload: BoardResponse = await response.json();

  return payload.data;
};
