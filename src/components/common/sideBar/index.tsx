import { useContext, useState, FC } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import { boards } from "@/constants/menu";

import SideBar from "./SideBar";

type SideBarContainerProps = { currentPage: string };

export type SideBarProps = SideBarContainerProps & {
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
  openMenuSlug: string;
  openAMenu: (i: string) => () => void;
};

const SideBarContainer: FC<SideBarContainerProps> = props => {
  const { isSideBarExtended, toggleSideBar } = useContext(ToggleSideBarContext);
  const [openMenuSlug, setOpenMenuSlug] = useState<string>(boards[0].slug);
  const openAMenu = (slug: string) => () => {
    setOpenMenuSlug(slug);
  };

  return (
    <SideBar
      {...props}
      isSideBarExtended={isSideBarExtended}
      toggleSideBar={toggleSideBar}
      openMenuSlug={openMenuSlug}
      openAMenu={openAMenu}
    />
  );
};

export default SideBarContainer;
