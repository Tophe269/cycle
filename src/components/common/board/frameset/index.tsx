import { useContext, ReactNode } from "react";

import ToggleMenuContext from "@/contexts/ToggleMenuContext";

import Frameset from "./Frameset";

type FramesetContainerProps = { children: ReactNode };

export type FramesetProps = FramesetContainerProps & {
  isMenuOpen: boolean;
};

const FramesetContainer = (props: FramesetContainerProps): JSX.Element => {
  const { isMenuOpen, toggleMenu } = useContext(ToggleMenuContext);

  return <Frameset {...props} isMenuOpen={isMenuOpen} />;
};

export default FramesetContainer;
