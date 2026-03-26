"use client";

import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "styled-components";
import theme from "app/_constants/theme";

import SideBar from "./sideBar/SideBar";

import { ContainerDiv } from "./styles";

type LayoutProps = PropsWithChildren;

const Layout: FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [firstSegment = "", secondSegment = ""] = (pathname ?? "")
    .replace(/^\/+/, "")
    .split("/");
  const currentCategory = secondSegment ? firstSegment : "starred";
  const currentPage = secondSegment || firstSegment;

  return (
    <ContainerDiv>
      <ThemeProvider theme={theme.nav}>
        <SideBar currentCategory={currentCategory} currentPage={currentPage} />
      </ThemeProvider>
      {children}
    </ContainerDiv>
  );
};

export default Layout;
