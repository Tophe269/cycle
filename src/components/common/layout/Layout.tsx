import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../../constants/theme";
import Head from "next/head";

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
  color: #171618;
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
  menuItem,
  title,
  children,
}: {
  menuItem: string;
  title: string;
  children: ReactNode;
}): JSX.Element => (
  <ContainerDiv>
    <Head>
      <title>{title}</title>
      <meta name="description" content={`Cycle - ${title}`} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400..700"
      />
    </Head>
    <ThemeProvider theme={theme.nav}>
      <Nav></Nav>
    </ThemeProvider>
    <ContentDiv>
      <Header>{title}</Header>
      {children}
    </ContentDiv>
  </ContainerDiv>
);

export default Layout;
