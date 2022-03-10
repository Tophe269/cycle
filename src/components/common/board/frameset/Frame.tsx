import { ReactNode } from "react";

import { FrameDiv, FrameTitleDiv, FrameTitleSpan } from "./styles";

type FrameProps = {
  ttleIcon: string;
  title: string;
  children: ReactNode;
};

const Frame = ({ ttleIcon, title, children }: FrameProps): JSX.Element => (
  <FrameDiv>
    <FrameTitleDiv>
      <FrameTitleSpan>
        {ttleIcon} {title}
      </FrameTitleSpan>
    </FrameTitleDiv>
    {children}
  </FrameDiv>
);

export default Frame;
