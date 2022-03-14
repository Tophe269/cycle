import { FrameSetMain } from "./styles";

import { FramesetProps } from "./index";

const FrameSet = ({
  children,
  isSideBarExtended,
}: FramesetProps): JSX.Element => (
  <FrameSetMain isSideBarExtended={isSideBarExtended}>{children}</FrameSetMain>
);

export default FrameSet;
