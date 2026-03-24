"use client";

import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import theme from "@/constants/theme";
import { boards } from "@/constants/menu";

import SideBar from "../sideBar/SideBar";
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
  const currentPage = (pathname ?? "").replace(/^\/+/, "").split("/")[0] || "";
  const { icon, text: title } = findTitleAndIcon({
    boards,
    category: "starred",
    board: currentPage,
  });

  return (
    <ContainerDiv>
      <ThemeProvider theme={theme.nav}>
        <SideBar currentPage={currentPage} />
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
