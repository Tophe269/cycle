import styled from "styled-components";

const Nav = styled.nav`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: 240px;
  flex: 0 0 240px;
`;

const LinksUl = styled.ul``;

const LinksLi = styled.li``;

const BoardsUl = styled.ul``;

const BoardsLi = styled.li``;

const SideBar = ({ menuItem }: { menuItem: string }) => (
  <Nav>
    <LinksUl></LinksUl>
    <BoardsUl></BoardsUl>
  </Nav>
);

export default SideBar;
