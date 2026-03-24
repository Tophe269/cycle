import { useContext, useState } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import { boards } from "@/constants/menu";

type UseSideBarParams = { currentPage: string };

export type SideBarProps = UseSideBarParams & {
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
  openMenuSlug: string;
  openAMenu: (i: string) => () => void;
};

export const useSideBar = ({ currentPage }: UseSideBarParams): SideBarProps => {
  const { isSideBarExtended, toggleSideBar } = useContext(ToggleSideBarContext);
  const [openMenuSlug, setOpenMenuSlug] = useState<string>(boards[0].slug);
  const openAMenu = (slug: string) => () => {
    setOpenMenuSlug(slug);
  };

  return {
    currentPage,
    isSideBarExtended,
    toggleSideBar,
    openMenuSlug,
    openAMenu,
  };
};
