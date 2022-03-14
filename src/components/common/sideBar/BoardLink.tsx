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
  isSideBarExtended: boolean;
};

const BoardLink = ({
  slug,
  text,
  icon,
  currentPage,
  isSideBarExtended,
}: BoardLinkProps): JSX.Element => (
  <Link href={slug} passHref>
    <a>
      <BoardsLinksLi
        active={currentPage === slug}
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
    </a>
  </Link>
);

export default BoardLink;
