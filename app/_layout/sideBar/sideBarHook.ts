import { useContext, useState } from "react";

import ToggleSideBarContext from "app/_contexts/ToggleSideBarContext";

import { boards } from "app/_constants/menu";

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
  const [prevCategory, setPrevCategory] = useState(currentCategory);
  if (prevCategory !== currentCategory) {
    setPrevCategory(currentCategory);
    setOpenMenuSlug(currentCategory || boards[0].slug);
  }

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
