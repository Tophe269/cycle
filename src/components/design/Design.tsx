import styled from "styled-components";

import { designBoard } from "../../constants/design-data";

const FrameSet = styled.div`
  display: flex;
  flex-direction: line;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

const Design = () => (
  <FrameSet>
    {designBoard.map(({ slug, icon, title, docs }) => (
      <Frame key={slug}>
        <div>
          {icon} {title}
        </div>
        {docs.map(({ id, text, tags, icon: docIcon }) => (
          <div key={id}>
            {text}
            <div>
              <div>{docIcon}</div>
              <div>#{id}</div>
              {tags.map(({ text: tagText }) => (
                <div key={tagText}>{tagText}</div>
              ))}
            </div>
          </div>
        ))}
      </Frame>
    ))}
  </FrameSet>
);

export default Design;
