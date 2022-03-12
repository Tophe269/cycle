import Link from "next/link";
import {
  Nav,
  LinksUl,
  LinksLi,
  BoardsUl,
  BoardsLi,
  BoardsLinksUl,
  BoardsLinksLi,
  TogglerDiv,
  TogglerIconDiv,
} from "./styles";
import Image from "next/image";

import { menuLinks, boards } from "@/constants/menu";

import { MenuLink, BoardMenu } from "@/types/menu";
import { SideBarProps } from "./index";

const SideBar = ({ currentPage, isMenuOpen, toggleMenu }: SideBarProps) => (
  <Nav isMenuOpen={isMenuOpen}>
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
        <BoardsLi key={boardSlug}>
          <div>
            <div>{title}</div>
            <BoardsLinksUl>
              {links.map(({ slug, text, icon }: MenuLink) => (
                <BoardsLinksLi key={`${boardSlug}-${slug}`}>
                  <span>{icon}</span>
                  <Link href={slug}>{text}</Link>
                </BoardsLinksLi>
              ))}
            </BoardsLinksUl>
          </div>
        </BoardsLi>
      ))}
    </BoardsUl>
    <TogglerDiv onClick={toggleMenu}>
      <TogglerIconDiv>
        <Image
          src={`/icons/select.svg`}
          alt="Toggle menu"
          width={14}
          height={14}
        />
      </TogglerIconDiv>
    </TogglerDiv>
  </Nav>
);

export default SideBar;
