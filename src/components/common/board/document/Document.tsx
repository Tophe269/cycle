import { Doc } from "../../../../types/board";

import { DocumentWrapper, Tags, Tag, Check, More } from "./styles";
import Image from "next/image";

const Document = ({ id, text, tags, icon }: Doc) => (
  <DocumentWrapper>
    {text}
    <Tags>
      <Tag>{icon}</Tag>
      <Tag>#{id}</Tag>
      {tags.map(({ text: tagText, color }) => (
        <Tag key={tagText} color={color}>
          {tagText}
        </Tag>
      ))}
    </Tags>
    <Check>
      <Image src={`/icons/check.svg`} alt="check" width={8} height={7} />
    </Check>
    <More>
      <Image src={`/icons/more.svg`} alt="more" layout="fill" />
    </More>
  </DocumentWrapper>
);

export default Document;
