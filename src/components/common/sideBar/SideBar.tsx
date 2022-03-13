import Link from "next/link";
import {
  Nav,
  LinksUl,
  LinksLi,
  BoardsUl,
  TogglerDiv,
  TogglerIconDiv,
} from "./styles";
import Image from "next/image";
import MenuBoard from "./MenuBoard";
import BoardLink from "./BoardLink";

import { menuLinks, boards } from "@/constants/menu";

import { MenuLink, BoardMenu } from "@/types/menu";
import { SideBarProps } from "./index";

const SideBar = ({ currentPage, isSideBarOpen, toggleMenu }: SideBarProps) => (
  <Nav isSideBarOpen={isSideBarOpen}>
    <LinksUl>
      {menuLinks.map(({ icon, text, slug }: MenuLink) => (
        <LinksLi key={slug}>
          <Image src={`/icons/${icon}.svg`} alt="Logo" width={14} height={14} />
          <Link href={slug}>{text}</Link>
        </LinksLi>
      ))}
    </LinksUl>
    <BoardsUl>
      {boards.map(({ title, slug: boardSlug, links }: BoardMenu) => (
        <MenuBoard
          key={boardSlug}
          title={title}
          boardSlug={boardSlug}
          isSideBarOpen={isSideBarOpen}
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
    <TogglerDiv onClick={toggleMenu}>
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
