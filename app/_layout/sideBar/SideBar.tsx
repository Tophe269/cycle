import { FC, ReactElement } from "react";
import {
  Nav,
  SeparatorHr,
  LinksUl,
  BoardsUl,
  NewSectionDiv,
  NewSectionIconSpan,
  TogglerDiv,
  TogglerIconDiv,
} from "./styles";
import AccountAndConfig from "./AccountAndConfig";
import MenuBoard from "./MenuBoard";
import BoardLink from "./BoardLink";
import MenuSimpleLink from "./MenuSimpleLink";
import Create from "app/_icons/Create";
import Select from "app/_icons/Select";

import { menuLinks, boards } from "app/_constants/menu";

import { MenuLink, BoardMenu } from "app/_types/menu";
import { useSideBar } from "./sideBarHook";

type SideBarContainerProps = {
  currentCategory: string;
  currentPage: string;
};

const SideBar: FC<SideBarContainerProps> = ({
  currentCategory,
  currentPage,
}) => {
  const { isSideBarExtended, toggleSideBar, openMenuSlug, openAMenu } =
    useSideBar({ currentCategory, currentPage });

  return (
    <Nav isSideBarExtended={isSideBarExtended}>
      <AccountAndConfig isSideBarExtended={isSideBarExtended} />
      <SeparatorHr />
      <LinksUl isSideBarExtended={isSideBarExtended}>
        {menuLinks.map(
          (menuLink: MenuLink): ReactElement => (
            <MenuSimpleLink
              key={menuLink.slug}
              {...menuLink}
              isSideBarExtended={isSideBarExtended}
            />
          ),
        )}
      </LinksUl>
      <SeparatorHr />

      <BoardsUl>
        {boards.map(
          ({ title, slug: boardSlug, links }: BoardMenu): ReactElement => (
            <MenuBoard
              key={boardSlug}
              title={title}
              boardSlug={boardSlug}
              isSideBarExtended={isSideBarExtended}
              openMenuSlug={openMenuSlug}
              openThisMenu={openAMenu(boardSlug)}
            >
              {links.map(
                (menuLink: MenuLink): ReactElement => (
                  <BoardLink
                    key={`${boardSlug}-${menuLink.slug}`}
                    {...menuLink}
                    categorySlug={boardSlug}
                    currentCategory={currentCategory}
                    currentPage={currentPage}
                    isSideBarExtended={isSideBarExtended}
                  />
                ),
              )}
            </MenuBoard>
          ),
        )}
        <NewSectionDiv isSideBarExtended={isSideBarExtended}>
          <NewSectionIconSpan>
            <Create />
          </NewSectionIconSpan>
          New section
        </NewSectionDiv>
      </BoardsUl>

      <TogglerDiv onClick={toggleSideBar}>
        <TogglerIconDiv isSideBarExtended={isSideBarExtended}>
          <Select />
        </TogglerIconDiv>
      </TogglerDiv>
    </Nav>
  );
};

export default SideBar;
