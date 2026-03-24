import { useContext } from "react";

import ToggleSideBarContext from "@/contexts/ToggleSideBarContext";

export type FramesetState = {
  isSideBarExtended: boolean;
};

export const useFrameset = (): FramesetState => {
  const { isSideBarExtended } = useContext(ToggleSideBarContext);

  return { isSideBarExtended };
};
