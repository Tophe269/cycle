import { FrameSetMain } from "./styles";

import { FramesetProps } from "./index";

const FrameSet = ({ children, isMenuOpen }: FramesetProps): JSX.Element => (
  <FrameSetMain isMenuOpen={isMenuOpen}>{children}</FrameSetMain>
);

export default FrameSet;
