import { useContext, ReactNode } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import Frameset from "./Frameset";

type FramesetContainerProps = { children: ReactNode };

export type FramesetProps = FramesetContainerProps & {
  isSideBarOpen: boolean;
};

const FramesetContainer = (props: FramesetContainerProps): JSX.Element => {
  const { isSideBarOpen, toggleSideBar } = useContext(ToggleSideBarContext);

  return <Frameset {...props} isSideBarOpen={isSideBarOpen} />;
};

export default FramesetContainer;
