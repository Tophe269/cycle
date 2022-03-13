import {
  Nav,
  SeparatorHr,
  LinksUl,
  BoardsUl,
  TogglerDiv,
  TogglerIconDiv,
} from "./styles";
import Image from "next/image";
import AccountAndConfig from "./AccountAndConfig";
import MenuBoard from "./MenuBoard";
import BoardLink from "./BoardLink";
import MenuSimpleLink from "./MenuSimpleLink";

import { menuLinks, boards } from "@/constants/menu";

import { MenuLink, BoardMenu } from "@/types/menu";
import { SideBarProps } from "./index";

const SideBar = ({
  currentPage,
  isSideBarOpen,
  toggleSideBar,
  openMenuSlug,
  openAMenu,
}: SideBarProps) => (
  <Nav isSideBarOpen={isSideBarOpen}>
    <AccountAndConfig isSideBarOpen={isSideBarOpen} />
    <SeparatorHr />
    <LinksUl>
      {menuLinks.map((menuLink: MenuLink) => (
        <MenuSimpleLink
          key={menuLink.slug}
          {...menuLink}
          isSideBarOpen={isSideBarOpen}
        />
      ))}
    </LinksUl>
    <SeparatorHr />
    <BoardsUl>
      {boards.map(({ title, slug: boardSlug, links }: BoardMenu) => (
        <MenuBoard
          key={boardSlug}
          title={title}
          boardSlug={boardSlug}
          isSideBarOpen={isSideBarOpen}
          openMenuSlug={openMenuSlug}
          openThisMenu={openAMenu(boardSlug)}
        >
          {links.map((menuLink: MenuLink) => (
            <BoardLink
              key={`${boardSlug}-${menuLink.slug}`}
              {...menuLink}
              currentPage={currentPage}
              isSideBarOpen={isSideBarOpen}
            />
          ))}
        </MenuBoard>
      ))}
    </BoardsUl>
    <TogglerDiv onClick={toggleSideBar}>
      <TogglerIconDiv isSideBarOpen={isSideBarOpen}>
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
