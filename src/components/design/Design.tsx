import Document from "@/components/common/board/document/Document";
import FrameSet from "@/components/common/board/frameset";
import Frame from "@/components/common/board/frameset/Frame";
import {
  NewGroupDiv,
  NewGroupSpan,
} from "@/components/common/board/frameset/styles";
import Image from "next/image";

import { DesignProps } from "./index";

const Design = ({ board }: DesignProps) => (
  <FrameSet>
    {board.map(({ slug, icon: titleIcon, title, docs }) => (
      <Frame key={slug} titleIcon={titleIcon} title={title}>
        {docs.map(({ id, text, tags, icon }) => (
          <Document key={id} id={id} text={text} tags={tags} icon={icon} />
        ))}
      </Frame>
    ))}
    <NewGroupDiv>
      <Image src={`/icons/new.svg`} alt="New doc" width={7} height={7} />
      <NewGroupSpan>New group</NewGroupSpan>
    </NewGroupDiv>
  </FrameSet>
);

export default Design;
