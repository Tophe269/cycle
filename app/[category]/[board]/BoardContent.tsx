"use client";

import Document from "@/components/common/board/document/Document";
import Frame from "@/components/common/board/frameset/Frame";
import FrameSet from "@/components/common/board/frameset/Frameset";
import {
  NewGroupDiv,
  NewGroupSpan,
} from "@/components/common/board/frameset/styles";
import { Doc, DocGroup } from "@/types/board";

import New from "../../../public/icons/new.svg";

type BoardContentProps = {
  data: DocGroup[];
};

const BoardContent = ({ data }: BoardContentProps) => (
  <FrameSet>
    {data.map(({ slug, icon: titleIcon, title, docs }: DocGroup) => (
      <Frame key={slug} titleIcon={titleIcon} title={title}>
        {docs.map(({ id, text, tags, icon }: Doc) => (
          <Document key={id} id={id} text={text} tags={tags} icon={icon} />
        ))}
      </Frame>
    ))}
    <NewGroupDiv>
      <New width={7} height={7} />
      <NewGroupSpan>New group</NewGroupSpan>
    </NewGroupDiv>
  </FrameSet>
);

export default BoardContent;