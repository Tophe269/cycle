import { BoardMenu, MenuLink } from "@/types/menu";

const findTitleAndIcon = ({
  boards,
  category,
  board,
}: {
  boards: BoardMenu[];
  category: string;
  board: string;
}): MenuLink =>
  boards
    .find(({ slug }) => slug === category)
    ?.links.find(({ slug }) => slug === board) ?? {
    icon: "",
    slug: "",
    text: "",
  };

export { findTitleAndIcon };
