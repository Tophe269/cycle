import { ReactNode } from "react";

import {
  BoardsLi,
  BoardsLiTitleDiv,
  BoardsLiTitleIconSpan,
  BoardsLinksUl,
} from "./styles";

import Down from "../../../../public/icons/down-w.svg";

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
    <BoardsLiTitleDiv
      isSideBarOpen={isSideBarOpen}
      onClick={openThisMenu}
      isMenuOpen={boardSlug === openMenuSlug}
    >
      <BoardsLiTitleIconSpan isMenuOpen={boardSlug === openMenuSlug}>
        <Down />
      </BoardsLiTitleIconSpan>
      {title}
    </BoardsLiTitleDiv>
    <BoardsLinksUl isOpen={boardSlug === openMenuSlug}>
      {children}
    </BoardsLinksUl>
  </BoardsLi>
);

export default MenuBoard;
