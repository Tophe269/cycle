import { FC } from "react";

import { FrameSetMain } from "./styles";

import { FramesetProps } from "./index";

const FrameSet: FC<FramesetProps> = ({ children, isSideBarExtended }) => (
  <FrameSetMain isSideBarExtended={isSideBarExtended}>{children}</FrameSetMain>
);

export default FrameSet;
