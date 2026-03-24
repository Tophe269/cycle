import { useContext, useEffect, useState } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import { boards } from "@/constants/menu";

type UseSideBarParams = {
  currentCategory: string;
  currentPage: string;
};

export type SideBarProps = UseSideBarParams & {
  isSideBarExtended: boolean;
  toggleSideBar: () => void;
  openMenuSlug: string;
  openAMenu: (i: string) => () => void;
};

export const useSideBar = ({
  currentCategory,
  currentPage,
}: UseSideBarParams): SideBarProps => {
  const { isSideBarExtended, toggleSideBar } = useContext(ToggleSideBarContext);
  const [openMenuSlug, setOpenMenuSlug] = useState<string>(
    currentCategory || boards[0].slug,
  );

  useEffect(() => {
    setOpenMenuSlug(currentCategory || boards[0].slug);
  }, [currentCategory]);

  const openAMenu = (slug: string) => () => {
    setOpenMenuSlug(slug);
  };

  return {
    currentCategory,
    currentPage,
    isSideBarExtended,
    toggleSideBar,
    openMenuSlug,
    openAMenu,
  };
};
