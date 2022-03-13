import styled from "styled-components";

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 12px;
  left: -8px;
  opacity: 0;
  background: #c4c4c4;
  box-shadow: 0px 1px 3px rgba(223, 223, 228, 0.95);
  border-radius: 4px;
  transition: opacity 0.5s;
`;

const MoreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  padding: 0.75px;
  position: absolute;
  right: 8px;
  top: 8px;
  opacity: 0;
  transition: opacity 0.5s;
`;

const DocumentWrapperDiv = styled.div`
  position: relative;
  width: 254px;
  padding: 8px 8px 10px 8px;
  margin-bottom: 8px;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme: { colorPrimary } }) => colorPrimary};
  background-color: ${({ theme: { docBgColor } }) => docBgColor};
  box-shadow: 0px 1px 2px rgba(75, 75, 75, 0.1);
  border-radius: 6px;
  &:hover {
    box-shadow: 0px 1px 4px rgba(75, 75, 75, 0.15);
  }
  &:hover ${CheckDiv}, &:hover ${MoreDiv} {
    opacity: 1;
  }
`;

const TagsDiv = styled.div`
  display: flex;
  margin-top: 8px;
`;

const TooltipDiv = styled.div<{ top: number; left: number }>`
  position: fixed;
  top: ${({ top }) => top - 6}px;
  left: ${({ left }) => left}px;
  padding: 6px 8px;
  transform: translate(-50%, -100%);
  font-weight: 600;
  font-size: 12px;
  white-space: nowrap;
  line-height: 20px;
  color: #ffffff;
  display: none;
  background: #171618;
  border-radius: 4px;
  z-index: 2;
`;

const TagDiv = styled.div<{ color?: string }>`
  flex-grow: 0;
  flex-shrink: 1;
  padding: 2px 4px;
  margin-left: 4px;
  &:first-child {
    margin: 0;
  }
  position: relative;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  border-radius: 4px;
  ${({ color, theme }) =>
    color
      ? `
      color: ${theme.tags[color].color};
      background-color: ${theme.tags[color].bgColor};
      `
      : "border: 1px solid #E6E6E6;"}
  &:hover + ${TooltipDiv} {
    display: block;
  }
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export { CheckDiv, MoreDiv, DocumentWrapperDiv, TooltipDiv, TagsDiv, TagDiv };
