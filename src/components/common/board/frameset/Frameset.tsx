import { FC, ReactNode } from "react";

import { FrameSetMain } from "./styles";
import { useFrameset } from "./framesetHook";

type FramesetProps = { children: ReactNode };

const FrameSet: FC<FramesetProps> = ({ children }) => {
  const { isSideBarExtended } = useFrameset();

  return (
    <FrameSetMain isSideBarExtended={isSideBarExtended}>{children}</FrameSetMain>
  );
};

export default FrameSet;
