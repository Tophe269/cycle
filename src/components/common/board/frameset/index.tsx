import { useContext, ReactNode } from "react";

import ToggleMenuContext from "@/contexts/ToggleMenuContext";

import Frameset from "./Frameset";

type FramesetContainerProps = { children: ReactNode };

export type FramesetProps = FramesetContainerProps & {
  isSideBarOpen: boolean;
};

const FramesetContainer = (props: FramesetContainerProps): JSX.Element => {
  const { isSideBarOpen, toggleMenu } = useContext(ToggleMenuContext);

  return <Frameset {...props} isSideBarOpen={isSideBarOpen} />;
};

export default FramesetContainer;
