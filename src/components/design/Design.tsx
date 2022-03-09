import styled from "styled-components";

import { designBoard } from "../../constants/design-data";

import Document from "../../components/common/board/document/Document";

const FrameSet = styled.div`
  display: flex;
  flex-direction: line;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  padding: 8px;
`;

const Design = () => (
  <FrameSet>
    {designBoard.map(({ slug, icon, title, docs }) => (
      <Frame key={slug}>
        <div>
          {icon} {title}
        </div>
        {docs.map(({ id, text, tags, icon }) => (
          <Document key={id} id={id} text={text} tags={tags} icon={icon} />
        ))}
      </Frame>
    ))}
  </FrameSet>
);

export default Design;
