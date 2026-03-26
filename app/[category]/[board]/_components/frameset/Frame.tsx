import { FC, PropsWithChildren, useState } from "react";

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
import Down from "app/_icons/Down";
import New from "app/_icons/New";

type FrameProps = PropsWithChildren<{
  titleIcon: string;
  title: string;
}>;

const Frame: FC<FrameProps> = ({ titleIcon, title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <FrameDiv $collapsed={collapsed}>
      <DownSpan
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        $collapsed={collapsed}
      >
        <Down width={7} height={6} />
      </DownSpan>
      <FrameTitleDiv $collapsed={collapsed}>
        <FrameTitleSpan $collapsed={collapsed}>
          <FrameTitleIconSpan>{titleIcon}</FrameTitleIconSpan>
          <FrameTitleTextSpan>{title}</FrameTitleTextSpan>
        </FrameTitleSpan>
      </FrameTitleDiv>
      <ScrollWrapperDiv $collapsed={collapsed}>
        {children}
        <NewDocDiv>
          <New width={7} height={7} />
          <NewDocSpan>New doc</NewDocSpan>
        </NewDocDiv>
      </ScrollWrapperDiv>
    </FrameDiv>
  );
};

export default Frame;
