import { FC } from "react";
import Link from "next/link";
import {
  BoardsLinksLi,
  BoardsLinksIconSpan,
  BoardsLinksTextSpan,
  BoardsLinksMoreSpan,
} from "./styles";
import MoreWhite from "app/_icons/MoreWhite";

import { MenuLink } from "app/_types/menu";

type BoardLinkProps = MenuLink & {
  categorySlug: string;
  currentCategory: string;
  currentPage: string;
  isSideBarExtended: boolean;
};

const BoardLink: FC<BoardLinkProps> = ({
  categorySlug,
  slug,
  text,
  icon,
  currentCategory,
  currentPage,
  isSideBarExtended,
}) => (
  <Link href={`/${categorySlug}/${slug}`}>
    <BoardsLinksLi
      active={currentCategory === categorySlug && currentPage === slug}
      isSideBarExtended={isSideBarExtended}
    >
      <BoardsLinksIconSpan isSideBarExtended={isSideBarExtended}>
        {icon}
      </BoardsLinksIconSpan>
      <BoardsLinksTextSpan isSideBarExtended={isSideBarExtended}>
        {text}
      </BoardsLinksTextSpan>
      <BoardsLinksMoreSpan>
        <MoreWhite />
      </BoardsLinksMoreSpan>
    </BoardsLinksLi>
  </Link>
);

export default BoardLink;
