"use client";

import { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";

import { ToggleSideBarProvider } from "@/contexts/ToggleSideBarContext";

import StyledComponentsRegistry from "./styled-components-registry";

type ProvidersProps = {
  children: ReactNode;
};

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-weight: 400;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default function Providers({ children }: ProvidersProps) {
  return (
    <StyledComponentsRegistry>
      <ToggleSideBarProvider>
        <GlobalStyle />
        {children}
      </ToggleSideBarProvider>
    </StyledComponentsRegistry>
  );
}
