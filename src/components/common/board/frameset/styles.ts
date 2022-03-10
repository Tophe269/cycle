import styled from "styled-components";

const FrameSetDiv = styled.div`
  width: calc(100vw - 240px);
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: ${({ theme: { bgColor } }) => bgColor};
  overflow-x: auto;
`;

const NewDocDiv = styled.div`
  padding: 2px 0px 2px 4.5px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  border-radius: 4px;
  transition: background-color 0.5s;
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
  margin: 6px;
  padding: 0px 0px 12px 0px;
  background-color: ${({ theme: { frameBgColor } }) => frameBgColor};
  border-radius: 8px;
  &:hover ${NewDocDiv} {
    background-color: ${({ theme: { newDocHvBgColor } }) => newDocHvBgColor};
  }
  ${({ collapsed }) => (collapsed ? "width: 30px;" : "")}
  transition: width 0.5s;
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
  transform: rotate(0deg);
  ${({ collapsed }) => (collapsed ? "transform: rotate(180deg);" : "")}
  transition: transform 0.5s;
  cursor: pointer;
`;

const FrameTitleDiv = styled.div<{ collapsed: boolean }>`
  width: 270px;
  margin: 8px 0;
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  ${({ collapsed }) =>
    collapsed
      ? `
  justify-content: flex-end;
  transform: translate(-270px, 0px);
  `
      : ""}
  transition: transform 0.5s, justify-content 0.5s;
`;

const FrameTitleSpan = styled.span<{ collapsed: boolean }>`
  display: inline-block;
  padding: 0 32px;
  ${({ collapsed }) => (collapsed ? "transform: rotate(-90deg);" : "")}
  transition: transform 0.5s;
  transform-origin: top right;
`;

const ScrollWrapperDiv = styled.div<{ collapsed: boolean }>`
  max-height: calc(100vh - 104px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0px 8px;
  ${({ collapsed }) =>
    collapsed
      ? `
  padding-top: 300px;
  opacity: 0;
  height: calc(100vh - 104px);
  `
      : ""}
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }
  transition: padding 0.5s, opacity 0.5s, height 0.5s;
`;

export {
  FrameSetDiv,
  FrameDiv,
  DownSpan,
  FrameTitleDiv,
  FrameTitleSpan,
  ScrollWrapperDiv,
  NewDocDiv,
  NewDocSpan,
};
