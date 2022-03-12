import { ReactNode, useMemo } from "react";
import Layout from "./Layout";
import { boards } from "@/constants/menu";
import { findTitleAndIcon } from "./helpers";

type LayoutContainerProps = {
  category: string;
  board: string;
  children: ReactNode;
};

export type LayoutProps = {
  icon: string;
  title: string;
  boardSlug: string;
  children: ReactNode;
};

const LayoutContainer = ({
  category,
  board,
  ...props
}: LayoutContainerProps): JSX.Element => {
  const {slug:boardSlug, icon, text: title } = useMemo(
    () => findTitleAndIcon({ boards, category, board }),
    [category, board],
  );
  return <Layout {...props} icon={icon} title={title} boardSlug={boardSlug} />;
};

export default LayoutContainer;
