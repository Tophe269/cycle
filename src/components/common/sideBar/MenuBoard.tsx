import { ReactNode, Dispatch, SetStateAction } from "react";

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
  openMenuSlug: string;
  openThisMenu: () => void;
};

const MenuBoard = ({
  boardSlug,
  title,
  isSideBarOpen,
  children,
  openMenuSlug,
  openThisMenu,
}: MenuBoardProps) => (
  <BoardsLi key={boardSlug}>
    <BoardsLiTitleDiv isSideBarOpen={isSideBarOpen} onClick={openThisMenu}>
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
    <BoardsLinksUl isOpen={boardSlug === openMenuSlug}>
      {children}
    </BoardsLinksUl>
  </BoardsLi>
);

export default MenuBoard;
