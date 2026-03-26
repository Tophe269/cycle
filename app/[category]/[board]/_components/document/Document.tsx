import { FC } from "react";

import { Doc } from "app/_types/board";

import { DocumentWrapperDiv, TagsDiv, CheckDiv, MoreDiv } from "./styles";
import Check from "app/_icons/Check";
import More from "app/_icons/More";
import TagLabel from "./TagLabel";

const Document: FC<Doc> = ({ id, text, tags, icon }) => (
  <DocumentWrapperDiv>
    {text}
    <TagsDiv>
      <TagLabel text={icon} />
      <TagLabel text={`#${id}`} />
      {tags.map(tag => (
        <TagLabel key={tag.text} {...tag} />
      ))}
    </TagsDiv>
    <CheckDiv>
      <Check />
    </CheckDiv>
    <MoreDiv>
      <More />
    </MoreDiv>
  </DocumentWrapperDiv>
);

export default Document;
