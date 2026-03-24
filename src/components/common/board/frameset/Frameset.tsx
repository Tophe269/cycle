import { FC, PropsWithChildren } from "react";

import { FrameSetMain } from "./styles";
import { useFrameset } from "./framesetHook";

type FramesetProps = PropsWithChildren;

const FrameSet: FC<FramesetProps> = ({ children }) => {
  const { isSideBarExtended } = useFrameset();

  return (
    <FrameSetMain isSideBarExtended={isSideBarExtended}>{children}</FrameSetMain>
  );
};

export default FrameSet;
