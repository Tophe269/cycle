import type { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

import Providers from "./_layout/providers";
import Layout from "app/_layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Cycle",
  description: "Cycle boards",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
