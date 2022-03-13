import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToggleSideBarProvider } from "@/contexts/ToggleSideBarContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToggleSideBarProvider>
      <Component {...pageProps} />
    </ToggleSideBarProvider>
  );
}

export default MyApp;
