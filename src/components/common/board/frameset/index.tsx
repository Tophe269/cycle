import { useContext, ReactNode, FC } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

import Frameset from "./Frameset";

type FramesetContainerProps = { children: ReactNode };

export type FramesetProps = FramesetContainerProps & {
  isSideBarExtended: boolean;
};

const FramesetContainer: FC<FramesetContainerProps> = props => {
  const { isSideBarExtended } = useContext(ToggleSideBarContext);

  return <Frameset {...props} isSideBarExtended={isSideBarExtended} />;
};

export default FramesetContainer;
