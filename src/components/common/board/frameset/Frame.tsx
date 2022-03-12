import { ReactNode, useState } from "react";

import {
  FrameDiv,
  DownSpan,
  FrameTitleDiv,
  FrameTitleSpan,
  FrameTitleIconSpan,
  FrameTitleTextSpan,
  ScrollWrapperDiv,
  NewDocDiv,
  NewDocSpan,

} from "./styles";
import Image from "next/image";

type FrameProps = {
  titleIcon: string;
  title: string;
  children: ReactNode;
};

const Frame = ({ titleIcon, title, children }: FrameProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <FrameDiv collapsed={collapsed}>
      <DownSpan
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        collapsed={collapsed}
      >
        <Image src={`/icons/down.svg`} alt="Collapse" width={7} height={6} />
      </DownSpan>
      <FrameTitleDiv collapsed={collapsed}>
        <FrameTitleSpan collapsed={collapsed}>
          <FrameTitleIconSpan>{titleIcon}</FrameTitleIconSpan>
          <FrameTitleTextSpan>{title}</FrameTitleTextSpan>
        </FrameTitleSpan>
      </FrameTitleDiv>
      <ScrollWrapperDiv collapsed={collapsed}>
        {children}
        <NewDocDiv>
          <Image src={`/icons/new.svg`} alt="New doc" width={7} height={7} />
          <NewDocSpan>New doc</NewDocSpan>
        </NewDocDiv>
      </ScrollWrapperDiv>
    </FrameDiv>
  );
};

export default Frame;
