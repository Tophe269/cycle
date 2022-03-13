import { ReactNode } from "react";

import {
  BoardsLi,
  BoardsLiTitleDiv,
  BoardsLiTitleIconSpan,
  BoardsLinksUl,
} from "./styles";
import Image from "next/image";

type MenuBoardProps = {
  boardSlug: string;
  title: string;
  isSideBarOpen: boolean;
  children: ReactNode;
};

const MenuBoard = ({
  boardSlug,
  title,
  isSideBarOpen,
  children,
}: MenuBoardProps) => (
  <BoardsLi key={boardSlug}>
    <BoardsLiTitleDiv isSideBarOpen={isSideBarOpen}>
      <BoardsLiTitleIconSpan>
        <Image
          src={`/icons/down-w.svg`}
          alt="Toggle menu"
          width={7}
          height={6}
        />
      </BoardsLiTitleIconSpan>
      {title}
    </BoardsLiTitleDiv>
    <BoardsLinksUl>{children}</BoardsLinksUl>
  </BoardsLi>
);

export default MenuBoard;
