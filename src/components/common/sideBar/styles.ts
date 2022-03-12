import styled from "styled-components";

const Nav = styled.nav<{ isMenuOpen: boolean }>`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "240px" : "64px")};
  position: relative;
  transition: width 0.5s;
  overflow: hidden;
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

const TogglerDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: -4px;
  width: 4px;
  height: 100%;
  opacity: 0;
  background-color: blue;
  :hover {
    opacity: 1;
  }
  transition: opacity 0.5s;
`;

const TogglerIconDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-50%);
`;

export {
  Nav,
  LinksUl,
  LinksLi,
  BoardsUl,
  BoardsLi,
  BoardsLinksUl,
  BoardsLinksLi,
  TogglerDiv,
  TogglerIconDiv,
};
