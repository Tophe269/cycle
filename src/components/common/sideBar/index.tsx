import { useContext } from "react";

import ToggleMenuContext from "@/contexts/ToggleMenuContext";

import SideBar from "./SideBar";

type SideBarContainerProps = { currentPage: string };

export type SideBarProps = SideBarContainerProps & {
  isSideBarOpen: boolean;
  toggleMenu: () => void;
};

const SideBarContainer = (props: SideBarContainerProps): JSX.Element => {
  const { isSideBarOpen, toggleMenu } = useContext(ToggleMenuContext);

  return (
    <SideBar {...props} isSideBarOpen={isSideBarOpen} toggleMenu={toggleMenu} />
  );
};

export default SideBarContainer;
