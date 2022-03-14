import Document from "@/components/common/board/document/Document";
import FrameSet from "@/components/common/board/frameset";
import Frame from "@/components/common/board/frameset/Frame";
import {
  NewGroupDiv,
  NewGroupSpan,
} from "@/components/common/board/frameset/styles";
import New from "../../../public/icons/new.svg";

import { DesignProps } from "./index";
import { DocGroup, Doc } from "@/types/board";

const Design = ({ board }: DesignProps): JSX.Element => (
  <FrameSet>
    {board.map(
      ({ slug, icon: titleIcon, title, docs }: DocGroup): JSX.Element => (
        <Frame key={slug} titleIcon={titleIcon} title={title}>
          {docs.map(
            ({ id, text, tags, icon }: Doc): JSX.Element => (
              <Document key={id} id={id} text={text} tags={tags} icon={icon} />
            ),
          )}
        </Frame>
      ),
    )}
    <NewGroupDiv>
      <New width={7} height={7} />
      <NewGroupSpan>New group</NewGroupSpan>
    </NewGroupDiv>
  </FrameSet>
);

export default Design;
