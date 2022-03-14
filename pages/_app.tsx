import type { AppProps } from "next/app";
import { ToggleSideBarProvider } from "@/contexts/ToggleSideBarContext";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: Inter;
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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleSideBarProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ToggleSideBarProvider>
  );
}

export default MyApp;
