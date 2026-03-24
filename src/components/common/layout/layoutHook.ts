import { ReactNode } from "react";
import { boards } from "@/constants/menu";
import { findTitleAndIcon } from "./helpers";

type UseLayoutParams = {
  category: string;
  board: string;
};

export type LayoutProps = {
  icon: string;
  title: string;
  boardSlug: string;
  children: ReactNode;
};

type UseLayoutResult = Omit<LayoutProps, "children">;

export const useLayout = ({
  category,
  board,
}: UseLayoutParams): UseLayoutResult => {
  const {
    slug: boardSlug,
    icon,
    text: title,
  } = findTitleAndIcon({ boards, category, board });
  return { boardSlug, icon, title };
};
