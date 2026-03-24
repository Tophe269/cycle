import type { Metadata } from "next";

import { findTitleAndIcon } from "@/components/common/layout/helpers";
import { boards } from "@/constants/menu";

import Design from "./Design";

const boardInfo = findTitleAndIcon({
  boards,
  category: "starred",
  board: "design",
});

export const metadata: Metadata = {
  title: boardInfo.text,
  description: `Cycle - ${boardInfo.text}`,
};

export default function DesignPage() {
  return <Design />;
}
