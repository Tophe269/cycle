import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../../constants/theme";
import Head from "next/head";

import SideBar from "../sideBar/SideBar";

const ContainerDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: green;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { bgColor } }) => bgColor};
  height: 100vh;
  width: 240px;
  flex-grow: 1;
`;

const Header = styled.header`
  font-family: Inter;
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  color: ${({ theme: { colorPrimary } }) => colorPrimary};
`;

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;

const Layout = ({
  currentPage,
  title,
  children,
}: {
  currentPage: string;
  title: string;
  children: ReactNode;
}): JSX.Element => (
  <ContainerDiv>
    <Head>
      <title>{title}</title>
      <meta name="description" content={`Cycle - ${title}`} />
    </Head>
    <ThemeProvider theme={theme.nav}>
      <SideBar currentPage={currentPage} />
    </ThemeProvider>
    <ThemeProvider theme={theme.content}>
      <ContentDiv>
        <Header>{title}</Header>
        {children}
      </ContentDiv>
    </ThemeProvider>
  </ContainerDiv>
);

export default Layout;
