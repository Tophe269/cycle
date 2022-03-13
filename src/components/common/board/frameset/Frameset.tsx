import { FrameSetMain } from "./styles";

import { FramesetProps } from "./index";

const FrameSet = ({ children, isSideBarOpen }: FramesetProps): JSX.Element => (
  <FrameSetMain isSideBarOpen={isSideBarOpen}>{children}</FrameSetMain>
);

export default FrameSet;
