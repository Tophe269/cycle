import styled from "styled-components";

const FrameSetDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: line;
  background-color: ${({ theme: { bgColor } }) => bgColor};
`;

const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  padding: 8px;
  background-color: ${({ theme: { frameBgColor } }) => frameBgColor};
`;

const FrameTitleDiv = styled.div``;
const FrameTitleSpan = styled.span`
  display: inline-block;
`;

export { FrameSetDiv, FrameDiv, FrameTitleDiv, FrameTitleSpan };
