import { useContext, useState, useCallback } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import { boards } from "@/constants/menu";

import SideBar from "./SideBar";

type SideBarContainerProps = { currentPage: string };

export type SideBarProps = SideBarContainerProps & {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
  openMenuSlug: string;
  openAMenu: (i: string) => () => void;
};

const SideBarContainer = (props: SideBarContainerProps): JSX.Element => {
  const { isSideBarOpen, toggleSideBar } = useContext(ToggleSideBarContext);
  const [openMenuSlug, setOpenMenuSlug] = useState<string>(boards[0].slug);
  const openAMenu = useCallback(
    (slug: string) => () => {
      setOpenMenuSlug(slug);
    },
    [setOpenMenuSlug],
  );

  return (
    <SideBar
      {...props}
      isSideBarOpen={isSideBarOpen}
      toggleSideBar={toggleSideBar}
      openMenuSlug={openMenuSlug}
      openAMenu={openAMenu}
    />
  );
};

export default SideBarContainer;
