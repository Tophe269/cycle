import styled from "styled-components";

const Nav = styled.nav<{ isSideBarOpen: boolean }>`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: ${({ isSideBarOpen }) => (isSideBarOpen ? "240px" : "64px")};
  position: relative;
  transition: width 0.8s;
`;

const SeparatorHr = styled.hr`
  flex: none;
  align-self: stretch;
  flex-grow: 0;
  margin: 0;
  height: 1px;
  border: none;
  background: #707070;
  opacity: 0.2;
`;

const AccountAndConfigDiv = styled.div<{ isSideBarOpen: boolean }>`
  display: flex;
  flex: none;
  flex-grow: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 16px 16px 17px;
  overflow: hidden;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  padding: 17px 12px 11.5px;
  `
      : ""}
  transition: padding 0.5s;
`;

const ConfigDiv = styled.div<{ isSideBarOpen: boolean }>`
  display: flex;
  max-width: 100%;
  padding: 7.5px 8px 7.5px;
  border-radius: 4px;
  &:hover {
    background: ${({ theme: { hvBgLinkColor } }) => hvBgLinkColor};
  }
  &:hover {
    svg path:last-child {
      transform: rotate(360deg);
    }
  }
  svg path {
    transform: rotate(0deg);
    transition: transform 0.5s;
    transform-origin: center;
  }
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  padding: 7.5px 10px 7.5px;
  `
      : ""}
  transition: padding 0.5s;
`;

const AccountDiv = styled.div<{ isSideBarOpen: boolean }>`
  display: flex;
  max-width: 100%;
  padding: 6px 8px 5px 8px;
  border-radius: 4px;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  margin-top: 2.5px;
  `
      : ""}
  transition: margin-top .5s;
  &:hover {
    background: ${({ theme: { hvBgLinkColor } }) => hvBgLinkColor};
  }
`;

const ConfigLogoSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 20px;
  height: 20px;
`;

const ConfigTextSpan = styled.span<{ isSideBarOpen: boolean }>`
  display: flex;
  flex-shrink: 1;
  margin: auto 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme: { hlColor } }) => hlColor};
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  opacity: 0;
  `
      : ""}
  transition: opacity 0.5s;
`;

const AccountAndConfigIconSpan = styled.span<{ isSideBarOpen: boolean }>`
  display: flex;
  flex-shrink: 1;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  opacity: 0;
  `
      : ""}
  transition: opacity 0.5s;
`;

const AccountAvatarSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 25px;
  margin-right: 8px;
  background: #ffffff;
  border: 2px solid #102dea;
  border-radius: 100px;
  overflow: hidden;
`;

const LinksUl = styled.ul<{ isSideBarOpen: boolean }>`
  list-style: none;
  padding: 17px 16px;
  margin: 0;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  padding: 8px 16px 4px;
  `
      : ""}
  transition: opacity 0.5s;
`;

const LinksLiIconSpan = styled.span<{ isSideBarOpen: boolean }>`
  flex: none;
  flex-grow: 0;
  margin-right: 9px;
  svg {
    width: 14px;
    height: 14px;
    transition: width 0.5s, height 0.5s;
  }
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  svg {
    width: 12px;
    height: 12px;
  }
  `
      : ""}
`;

const LinksLiLetterSpan = styled.span`
  flex: none;
  flex-grow: 0;
  margin-left: 8px;
  svg {
    width: 16px;
    height: 16px;
  }
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
    ${LinksLiIconSpan} svg path {
      fill: ${({ theme: { hvColor } }) => hvColor};
    }
    ${LinksLiLetterSpan} svg rect {
      fill: ${({ theme: { hvColor } }) => hvColor};
    }
  }
`;

const LinksLiTextSpan = styled.span<{ isSideBarOpen: boolean }>`
  flex: none;
  flex-grow: 1;
  ${({ isSideBarOpen }) =>
    !isSideBarOpen
      ? `
  opacity: 0;
  `
      : ""}
  transition: opacity 0.5s;
`;

const BoardsUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 17px 0 0 0;
`;

const BoardsLi = styled.li``;

const BoardsLiTitleDiv = styled.div<{
  isSideBarOpen: boolean;
  isMenuOpen: boolean;
}>`
  margin: 4px 0 4px 16px;
  height: 24px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  align-items: center;
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
  ${({ isMenuOpen, theme: { color } }) =>
    !isMenuOpen
      ? `
  color: ${color};
  `
      : ""}
  transition: margin 0.5s, opacity 0.5s, height 0.5s, color 0.5s;
`;

const BoardsLiTitleIconSpan = styled.span<{
  isMenuOpen: boolean;
}>`
  margin: 0 12px;
  width: 8px;
  height: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-90deg);
  svg {
    width: 8px;
    height: 8px;
    path {
      transition: fill 0.5s;
    }
  }
  ${({ isMenuOpen, theme: { color } }) =>
    !isMenuOpen
      ? `
  transform: rotate(0deg);
  svg path {
    fill: ${color};
  }
  `
      : ""}
  transition: transform 0.5s;
`;

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
  SeparatorHr,
  AccountAndConfigDiv,
  ConfigDiv,
  AccountDiv,
  ConfigLogoSpan,
  ConfigTextSpan,
  AccountAndConfigIconSpan,
  AccountAvatarSpan,
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
