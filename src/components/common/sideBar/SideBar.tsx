import { FC } from "react";
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
import Image from "next/image";
import AccountAndConfig from "./AccountAndConfig";
import MenuBoard from "./MenuBoard";
import BoardLink from "./BoardLink";
import MenuSimpleLink from "./MenuSimpleLink";
import Create from "../../../../public/icons/create.svg";

import { menuLinks, boards } from "@/constants/menu";

import { MenuLink, BoardMenu } from "@/types/menu";
import { SideBarProps } from "./index";

const SideBar: FC<SideBarProps> = ({
  currentPage,
  isSideBarExtended,
  toggleSideBar,
  openMenuSlug,
  openAMenu,
}) => (
  <Nav isSideBarExtended={isSideBarExtended}>
    <AccountAndConfig isSideBarExtended={isSideBarExtended} />
    <SeparatorHr />
    <LinksUl isSideBarExtended={isSideBarExtended}>
      {menuLinks.map(
        (menuLink: MenuLink): JSX.Element => (
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
        ({ title, slug: boardSlug, links }: BoardMenu): JSX.Element => (
          <MenuBoard
            key={boardSlug}
            title={title}
            boardSlug={boardSlug}
            isSideBarExtended={isSideBarExtended}
            openMenuSlug={openMenuSlug}
            openThisMenu={openAMenu(boardSlug)}
          >
            {links.map(
              (menuLink: MenuLink): JSX.Element => (
                <BoardLink
                  key={`${boardSlug}-${menuLink.slug}`}
                  {...menuLink}
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
        <Image
          src={`/icons/select.svg`}
          alt="Toggle menu"
          width={6}
          height={10}
        />
      </TogglerIconDiv>
    </TogglerDiv>
  </Nav>
);

export default SideBar;
