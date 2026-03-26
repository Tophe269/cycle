import { FC } from "react";
import Link from "next/link";
import {
  BoardsLinksLi,
  BoardsLinksIconSpan,
  BoardsLinksTextSpan,
  BoardsLinksMoreSpan,
} from "./styles";
import Image from "next/image";

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
        <Image
          src={`/icons/more-w.svg`}
          alt="Configure"
          width={10.5}
          height={2.63}
        />
      </BoardsLinksMoreSpan>
    </BoardsLinksLi>
  </Link>
);

export default BoardLink;
