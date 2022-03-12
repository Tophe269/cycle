import styled from "styled-components";

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: row;
`;

const Header = styled.header`
  display: flex;
  margin: 16px 0 14px 32px;
  align-items: center;
`;

const HeaderTitleSpan = styled.span`
  display: inline-block;
  margin-left: 8px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme: { colorPrimary } }) => colorPrimary};
`;

const HeaderTitleIconSpan = styled.span`
  font-size: 18px;
  line-height: 24px;
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme: { bgColor } }) => bgColor};
`;

export {
  ContainerDiv,
  Header,
  HeaderTitleSpan,
  HeaderTitleIconSpan,
  ContentDiv,
};
