import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { findTitleAndIcon } from "@/components/common/layout/helpers";
import { boards } from "@/constants/menu";

import Design from "../../design/Design";
import RoadmapTech from "../../roadmap-tech/RoadmapTech";

type BoardPageProps = {
  params: Promise<{
    category: string;
    board: string;
  }>;
};

const boardPages = {
  design: Design,
  "roadmap-tech": RoadmapTech,
} as const;

export async function generateMetadata({
  params,
}: BoardPageProps): Promise<Metadata> {
  const { category, board } = await params;
  const boardInfo = findTitleAndIcon({ boards, category, board });

  if (!boardInfo.slug || !(board in boardPages)) {
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
  const BoardComponent = boardPages[board as keyof typeof boardPages];

  if (!boardInfo.slug || !BoardComponent) {
    notFound();
  }

  return <BoardComponent />;
}