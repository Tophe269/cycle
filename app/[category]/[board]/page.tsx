import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { findTitleAndIcon } from "@/components/common/layout/helpers";
import { boards } from "@/constants/menu";

import BoardContent from "./BoardContent";
import { getBoardData, isSupportedBoard } from "./helpers";

type BoardPageProps = {
  params: Promise<{
    category: string;
    board: string;
  }>;
};

export async function generateMetadata({
  params,
}: BoardPageProps): Promise<Metadata> {
  const { category, board } = await params;
  const boardInfo = findTitleAndIcon({ boards, category, board });

  if (!boardInfo.slug || !isSupportedBoard(board)) {
    return {
      title: "Cycle",
      description: "Cycle boards",
    };
  }

  return {
    title: boardInfo.text,
    description: `Cycle - ${boardInfo.text}`,
  };
}

export default async function BoardPage({ params }: BoardPageProps) {
  const { category, board } = await params;
  const boardInfo = findTitleAndIcon({ boards, category, board });

  if (!boardInfo.slug || !isSupportedBoard(board)) {
    notFound();
  }

  const data = await getBoardData(category, board);

  return <BoardContent data={data} />;
}