import { ReactNode, FC } from "react";

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
  isSideBarExtended: boolean;
  children: ReactNode;
  openMenuSlug: string;
  openThisMenu: () => void;
};

const MenuBoard:FC<MenuBoardProps> = ({
  boardSlug,
  title,
  isSideBarExtended,
  children,
  openMenuSlug,
  openThisMenu,
} ) => (
  <BoardsLi key={boardSlug}>
    <BoardsLiTitleDiv
      isSideBarExtended={isSideBarExtended}
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
