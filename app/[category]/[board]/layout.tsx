import { PropsWithChildren } from "react";
import { boards } from "app/_constants/menu";
import { findTitleAndIcon } from "app/_layout/helpers";

import BoardLayoutClient from "./layoutClient";

type BoardLayoutProps = PropsWithChildren<{
  params: Promise<{
    category: string;
    board: string;
  }>;
}>;

export default async function BoardLayout({
  params,
  children,
}: BoardLayoutProps) {
  const { category, board } = await params;
  const { icon, text: title } = findTitleAndIcon({
    boards,
    category,
    board,
  });

  return (
    <BoardLayoutClient icon={icon} title={title}>
      {children}
    </BoardLayoutClient>
  );
}
