import { boards } from "@/constants/menu";
import { findTitleAndIcon } from "./helpers";

type UseLayoutParams = {
  category: string;
  board: string;
};

type UseLayoutResult = {
  icon: string;
  title: string;
  boardSlug: string;
};

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
