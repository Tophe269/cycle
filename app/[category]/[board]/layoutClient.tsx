"use client";

import { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import theme from "app/_constants/theme";
import {
  Header,
  HeaderTitleSpan,
  HeaderTitleIconSpan,
  ContentDiv,
} from "app/_layout/styles";

type BoardLayoutClientProps = PropsWithChildren<{
  icon: ReactNode;
  title: string;
}>;

export default function BoardLayoutClient({
  icon,
  title,
  children,
}: BoardLayoutClientProps) {
  return (
    <ThemeProvider theme={theme.content}>
      <ContentDiv>
        <Header>
          <HeaderTitleIconSpan>{icon}</HeaderTitleIconSpan>{" "}
          <HeaderTitleSpan>{title}</HeaderTitleSpan>
        </Header>
        {children}
      </ContentDiv>
    </ThemeProvider>
  );
}
