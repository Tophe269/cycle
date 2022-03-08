import styled from "styled-components";
import Link from "next/link";

import { menuLinks, boards } from "../../../constants/menu";

import { MenuLink, BoardMenu } from "../../../types/menu";

const Nav = styled.nav`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: 240px;
  flex: 0 0 240px;
`;

const LinksUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinksLi = styled.li``;

const BoardsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BoardsLi = styled.li``;

const BoardsLinksUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BoardsLinksLi = styled.li``;

const SideBar = ({ menuItem }: { menuItem: string }) => (
  <Nav>
    <LinksUl>
      {menuLinks.map(({ icon, text, slug }: MenuLink) => (
        <LinksLi key={slug}>
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
  </Nav>
);

export default SideBar;
