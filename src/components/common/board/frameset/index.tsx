import { useContext, ReactNode } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import Frameset from "./Frameset";

type FramesetContainerProps = { children: ReactNode };

export type FramesetProps = FramesetContainerProps & {
  isSideBarExtended: boolean;
};

const FramesetContainer = (props: FramesetContainerProps): JSX.Element => {
  const { isSideBarExtended } = useContext(ToggleSideBarContext);

  return <Frameset {...props} isSideBarExtended={isSideBarExtended} />;
};

export default FramesetContainer;
