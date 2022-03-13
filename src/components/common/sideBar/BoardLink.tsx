import Link from "next/link";
import {
  BoardsLinksLi,
  BoardsLinksIconSpan,
  BoardsLinksTextSpan,
  BoardsLinksMoreSpan,
} from "./styles";
import Image from "next/image";

import { MenuLink } from "@/types/menu";

type BoardLinkProps = MenuLink & {
  currentPage: string;
  isSideBarOpen: boolean;
};

const BoardLink = ({
  slug,
  text,
  icon,
  currentPage,
  isSideBarOpen,
}: BoardLinkProps) => (
  <Link href={slug} passHref>
    <a>
      <BoardsLinksLi
        active={currentPage === slug}
        isSideBarOpen={isSideBarOpen}
      >
        <BoardsLinksIconSpan isSideBarOpen={isSideBarOpen}>
          {icon}
        </BoardsLinksIconSpan>
        <BoardsLinksTextSpan isSideBarOpen={isSideBarOpen}>
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
    </a>
  </Link>
);

export default BoardLink;
