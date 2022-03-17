import { FC } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/constants/theme";
import Head from "next/head";

import SideBar from "../sideBar";

import {
  ContainerDiv,
  Header,
  HeaderTitleSpan,
  HeaderTitleIconSpan,
  ContentDiv,
} from "./styles";

import { LayoutProps } from "./index";

const Layout: FC<LayoutProps> = ({ icon, title, boardSlug, children }) => (
  <ContainerDiv>
    <Head>
      <title>{title}</title>
      <meta name="description" content={`Cycle - ${title}`} />
    </Head>
    <ThemeProvider theme={theme.nav}>
      <SideBar currentPage={boardSlug} />
    </ThemeProvider>
    <ThemeProvider theme={theme.content}>
      <ContentDiv>
        <Header>
          <HeaderTitleIconSpan>{icon}</HeaderTitleIconSpan>{" "}
          <HeaderTitleSpan>{title}</HeaderTitleSpan>
        </Header>
        {children}
      </ContentDiv>
    </ThemeProvider>
  </ContainerDiv>
);

export default Layout;
