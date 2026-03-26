"use client";

import Document from "./document/Document";
import Frame from "./frameset/Frame";
import FrameSet from "./frameset/Frameset";
import { NewGroupDiv, NewGroupSpan } from "./frameset/styles";
import { Doc, DocGroup } from "app/_types/board";

import New from "app/_icons/New";

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
