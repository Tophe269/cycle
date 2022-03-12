import styled from "styled-components";

const Nav = styled.nav<{ isMenuOpen: boolean }>`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: ${({ isMenuOpen }) => (isMenuOpen ? "240px" : "64px")};
  position: relative;
  transition: width 0.8s;
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
  right: -4px;
  width: 4px;
  height: 100%;
  max-height: 500px;
  opacity: 0;
  background: linear-gradient(
    180deg,
    #2e48ed 10.71%,
    rgba(39, 64, 225, 0) 86.61%
  );
  :hover {
    opacity: 1;
  }
  transition: opacity 0.5s;
  cursor: pointer;
`;

const TogglerIconDiv = styled.div<{ isMenuOpen: boolean }>`
  position: absolute;
  top: 16px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
  background: linear-gradient(180deg, #2e48ed 0%, #2740e1 100%);
  border-radius: 50%;
  transform: translateX(-50%) rotate(-180deg);
  ${({ isMenuOpen }) =>
    isMenuOpen && "transform: translateX(-50%) rotate(0deg);"}
  transition: transform .8s;
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
