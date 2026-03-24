"use client";

import { FC } from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/constants/theme";

import SideBar from "../sideBar/SideBar";

import {
  ContainerDiv,
  Header,
  HeaderTitleSpan,
  HeaderTitleIconSpan,
  ContentDiv,
} from "./styles";

import { LayoutProps } from "./layoutHook";

const Layout: FC<LayoutProps> = ({ icon, title, boardSlug, children }) => (
  <ContainerDiv>
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
