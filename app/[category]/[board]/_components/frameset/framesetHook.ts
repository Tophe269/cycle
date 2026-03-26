import { useContext } from "react";

import ToggleSideBarContext from "app/_contexts/ToggleSideBarContext";

export type FramesetState = {
  isSideBarExtended: boolean;
};

export const useFrameset = (): FramesetState => {
  const { isSideBarExtended } = useContext(ToggleSideBarContext);

  return { isSideBarExtended };
};
