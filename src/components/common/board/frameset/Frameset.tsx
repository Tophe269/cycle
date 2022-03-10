import { ReactNode } from "react";

import { FrameSetDiv } from "./styles";

const FrameSet = ({ children }: { children: ReactNode }): JSX.Element => (
  <FrameSetDiv>{children}</FrameSetDiv>
);

export default FrameSet;
