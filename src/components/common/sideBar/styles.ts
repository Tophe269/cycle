import styled from "styled-components";

const Nav = styled.nav<{ isSideBarOpen: boolean }>`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: ${({ isSideBarOpen }) => (isSideBarOpen ? "240px" : "64px")};
  position: relative;
  transition: width 0.8s;
`;

const LinksUl = styled.ul`
  list-style: none;
  padding: 0 16px;
  margin: 0;
`;

const LinksLi = styled.li`
  display: flex;
  padding: 4px 8px 4px 9px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme: { color } }) => color};
  border-radius: 4px;
  overflow: hidden;
  &:hover {
    color: ${({ theme: { hvColor } }) => hvColor};
    background: ${({ theme: { hvBgLinkColor } }) => hvBgLinkColor};
    svg path {
      fill: ${({ theme: { hvColor } }) => hvColor};
    }
  }
  svg {
    width: 14px;
    height: 14px;
  }
`;
const LinksLiIconSpan = styled.span`
  flex: none;
  flex-grow: 0;
  margin-right: 9px;
`;
const LinksLiTextSpan = styled.span`
  flex: none;
  flex-grow: 1;
`;
const LinksLiLetterSpan = styled.span`
  flex: none;
  flex-grow: 0;
  margin-left: 8px;
`;

const BoardsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 17px 0 0 0;
`;

const BoardsLi = styled.li``;

const BoardsLiTitleDiv = styled.div<{ isSideBarOpen: boolean }>`
  margin: 4px 0 4px 16px;
  height: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme: { hlColor } }) => hlColor};
  cursor: pointer;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  opacity: 0;
  height: 0;
  margin: 0;
  `
      : ""}
  transition: margin 0.5s, opacity 0.5s, height 0.5s;
`;
const BoardsLiTitleIconSpan = styled.span``;

const BoardsLinksUl = styled.ul<{ isOpen: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0 16px;
  max-height: 300px;
  overflow: hidden;
  ${({ isOpen }) => (!isOpen ? "max-height: 0;" : "")}
  transition: max-height 0.5s;
`;

const BoardsLinksLi = styled.li<{ active: boolean; isSideBarOpen: boolean }>`
  padding: 4px 0;
  width: inherit;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-weight: 400;
  &:hover {
    color: ${({ theme: { hvColor } }) => hvColor};
    background-color: ${({ theme: { hvBgColor } }) => hvBgColor};
  }
  transition: background-color 0.5s;
  ${({ active, theme: { hlColor, hlBgColor } }) =>
    active
      ? `
  font-weight: 600;
  color: ${hlColor};
  background-color: ${hlBgColor};
  `
      : ""}
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  margin-top: 8px;
  `
      : ""}
  transition: margin 0.5s;
`;

const BoardsLinksIconSpan = styled.span<{ isSideBarOpen: boolean }>`
  width: 16px;
  height: 20px;
  margin: 0 12px 0 28px;
  font-size: 15px;
  flex: none;
  flex-grow: 0;
  line-height: 18px;
  text-align: center;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  margin: 0 8px 0 9px;
  line-height: 24px;
  font-size: 15px;
  `
      : ""}
  transition: all 0.5s;
`;

const BoardsLinksTextSpan = styled.span<{ isSideBarOpen: boolean }>`
  flex: none;
  flex-grow: 1;
  font-size: 14px;
  line-height: 24px;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  opacity: 0;
  `
      : ""}
  transition: opacity 0.5s;
`;

const BoardsLinksMoreSpan = styled.span`
  height: 20px;
  width: 20px;
  margin: 0px 8px;
  flex: none;
  flex-grow: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  border-radius: 4px;
  background-color: ${({ theme: { hvBgMoreColor } }) => hvBgMoreColor};
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.5s;
`;

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

const TogglerIconDiv = styled.div<{ isSideBarOpen: boolean }>`
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
  ${({ isSideBarOpen }) =>
    isSideBarOpen && "transform: translateX(-50%) rotate(0deg);"}
  transition: transform .8s;
`;

export {
  Nav,
  LinksUl,
  LinksLi,
  LinksLiIconSpan,
  LinksLiTextSpan,
  LinksLiLetterSpan,
  BoardsUl,
  BoardsLi,
  BoardsLinksUl,
  BoardsLinksLi,
  BoardsLiTitleDiv,
  BoardsLiTitleIconSpan,
  BoardsLinksIconSpan,
  BoardsLinksTextSpan,
  BoardsLinksMoreSpan,
  TogglerDiv,
  TogglerIconDiv,
};
