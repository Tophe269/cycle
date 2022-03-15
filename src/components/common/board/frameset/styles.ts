import styled from "styled-components";

const FrameSetMain = styled.main<{ isSideBarExtended: boolean }>`
  width: calc(
    100vw - ${({ isSideBarExtended }) => (isSideBarExtended ? "240px" : "64px")}
  );
  padding: 0 26px 10px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  overflow-x: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { newDocHvBgColor } }) => newDocHvBgColor};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { colorPrimary } }) => colorPrimary};
    border-radius: 3px;
  }
  transition: width 0.8s;
  color: ${({ theme: { colorPrimary } }) => colorPrimary}; ;
`;

const NewDocDiv = styled.div`
  padding: 2px 0px 2px 4.5px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  border-radius: 4px;
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
  svg path {
    fill: ${({ theme: { colorSecondary } }) => colorSecondary};
    transition: fill 0.5s;
  }
  transition: color 0.5s background-color 0.5s;
  &:hover {
    color: ${({ theme: { colorPrimary } }) => colorPrimary};
    background-color: ${({ theme: { newDocHvBgColor } }) => newDocHvBgColor};
    svg path {
      fill: ${({ theme: { colorPrimary } }) => colorPrimary};
    }
  }
  cursor: pointer;
`;

const NewDocSpan = styled.span`
  margin-left: 4.5px;
`;

const FrameDiv = styled.div<{ collapsed: boolean }>`
  position: relative;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 270px;
  margin: 0 6px;
  padding: 0px 0px 12px 0px;
  background-color: ${({ theme: { frameBgColor } }) => frameBgColor};
  border-radius: 8px;
  ${({ collapsed }) => collapsed && "width: 33px;"}
  transition: width 0.5s, background-color .5s;
  overflow: hidden;
`;

const DownSpan = styled.span<{ collapsed: boolean }>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 16px;
  top: 12px;
  left: 8px;
  z-index: 2;
  border-radius: 4px;
  transform: rotate(0deg);
  ${({ collapsed }) => collapsed && "transform: rotate(180deg);"}
  transition: transform 0.5s, background-color .5s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { newDocHvBgColor } }) => newDocHvBgColor};
    svg path {
      fill: ${({ theme: { colorPrimary } }) => colorPrimary};
    }
  }
  svg path {
    transition: background-color 0.5s;
  }
`;

const FrameTitleDiv = styled.div<{ collapsed: boolean }>`
  width: 270px;
  margin: 8px 0;
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  ${({ collapsed }) => collapsed && "transform: translate(-267px, 0px);"}
  transition: all 0.5s;
`;

const FrameTitleSpan = styled.span<{ collapsed: boolean }>`
  display: block;
  padding: 0 24px 0 32px;
  flex-grow: 1;
  ${({ collapsed }) =>
    collapsed &&
    `
  transform: rotate(-90deg);
  flex-grow: 0;`}
  transition: all 0.5s;
  transform-origin: top right;
`;

const FrameTitleIconSpan = styled.span`
  display: inline-block;
`;

const FrameTitleTextSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
`;

const ScrollWrapperDiv = styled.div<{ collapsed: boolean }>`
  max-height: calc(100vh - 129px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0px 8px;
  ${({ collapsed }) =>
    collapsed &&
    `
  padding-top: 300px;
  opacity: 0;
  height: calc(100vh - 129px);
  `}
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme: { newDocHvBgColor } }) => newDocHvBgColor};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme: { colorPrimary } }) => colorPrimary};
    border-radius: 3px;
  }
  transition: padding 0.5s, opacity 0.5s, height 0.5s;
`;

const NewGroupDiv = styled.div`
  margin: 11px 0 0 11px;
  padding: 2px 0.5px;
  width: 119px;
  flex-shrink: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme: { colorSecondary } }) => colorSecondary};
  svg path {
    fill: ${({ theme: { colorSecondary } }) => colorSecondary};
    transition: fill 0.5s;
  }
  &:hover {
    color: ${({ theme: { colorPrimary } }) => colorPrimary};
    svg path {
      fill: ${({ theme: { colorPrimary } }) => colorPrimary};
    }
  }
  transition: color 0.5s;
  cursor: pointer;
`;

const NewGroupSpan = styled.span`
  display: inline-block;
  margin-left: 4.5px;
`;

export {
  FrameSetMain,
  FrameDiv,
  DownSpan,
  FrameTitleDiv,
  FrameTitleIconSpan,
  FrameTitleTextSpan,
  FrameTitleSpan,
  ScrollWrapperDiv,
  NewDocDiv,
  NewDocSpan,
  NewGroupDiv,
  NewGroupSpan,
};
