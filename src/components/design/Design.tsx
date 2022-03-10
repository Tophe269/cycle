import styled from "styled-components";

import Document from "../../components/common/board/document/Document";
import FrameSet from "../../components/common/board/frameset/Frameset";
import Frame from "../../components/common/board/frameset/Frame";

import { DesignProps } from "./index";

const Design = ({ board }: DesignProps) => (
  <FrameSet>
    {board.map(({ slug, icon: ttleIcon, title, docs }) => (
      <Frame key={slug} ttleIcon={ttleIcon} title={title}>
        {docs.map(({ id, text, tags, icon }) => (
          <Document key={id} id={id} text={text} tags={tags} icon={icon} />
        ))}
      </Frame>
    ))}
  </FrameSet>
);

export default Design;
