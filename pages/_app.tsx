import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToggleMenuProvider } from "@/contexts/ToggleMenuContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleMenuProvider>
      <Component {...pageProps} />
    </ToggleMenuProvider>
  );
}

export default MyApp;
