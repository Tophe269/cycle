import { useContext } from "react";

import ToggleMenuContext from "@/contexts/ToggleMenuContext";

import SideBar from "./SideBar";

type SideBarContainerProps = { currentPage: string };

export type SideBarProps = SideBarContainerProps & {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const SideBarContainer = (props: SideBarContainerProps): JSX.Element => {
  const { isMenuOpen, toggleMenu } = useContext(ToggleMenuContext);

  return <SideBar {...props} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />;
};

export default SideBarContainer;
