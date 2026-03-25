"use client";

import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import theme from "app/_constants/theme";
import { boards } from "app/_constants/menu";

import SideBar from "./sideBar/SideBar";
import { findTitleAndIcon } from "./helpers";

import {
  ContainerDiv,
  Header,
  HeaderTitleSpan,
  HeaderTitleIconSpan,
  ContentDiv,
} from "./styles";

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [firstSegment = "", secondSegment = ""] = (pathname ?? "")
    .replace(/^\/+/, "")
    .split("/");
  const currentCategory = secondSegment ? firstSegment : "starred";
  const currentPage = secondSegment || firstSegment;
  const { icon, text: title } = findTitleAndIcon({
    boards,
    category: currentCategory,
    board: currentPage,
  });

  return (
    <ContainerDiv>
      <ThemeProvider theme={theme.nav}>
        <SideBar currentCategory={currentCategory} currentPage={currentPage} />
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
};

export default Layout;
