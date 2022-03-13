import { Doc } from "@/types/board";

import { DocumentWrapperDiv, TagsDiv, CheckDiv, MoreDiv } from "./styles";
import Image from "next/image";
import TagLabel from "./TagLabel";

const Document = ({ id, text, tags, icon }: Doc) => (
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
      <Image src={`/icons/check.svg`} alt="check" width={8} height={7} />
    </CheckDiv>
    <MoreDiv>
      <Image src={`/icons/more.svg`} alt="more" layout="fill" />
    </MoreDiv>
  </DocumentWrapperDiv>
);

export default Document;
