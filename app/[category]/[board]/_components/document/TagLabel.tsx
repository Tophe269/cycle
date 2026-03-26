import { useRef, useCallback, useState, FC } from "react";

import { Tag } from "app/_types/board";

import { TagDiv, TooltipDiv } from "./styles";

const TagLabel: FC<Tag> = ({ text: tagText, color }) => {
  const tagRef = useRef<HTMLDivElement | null>(null);
  const [coord, setCoord] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  const calculateTooltipPosition = () => {
    const { top, left, width } = tagRef?.current?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      width: 0,
    };
    setCoord({ top, left: left + width / 2 });
  };

  const setRef = useCallback((node: HTMLDivElement | null) => {
    tagRef.current = node;
    if (node) {
      const { clientWidth, scrollWidth } = node;
      setIsOverflowing(clientWidth < scrollWidth);
    }
  }, []);

  return (
    <>
      <TagDiv
        ref={setRef}
        color={color}
        onMouseEnter={calculateTooltipPosition}
      >
        {tagText}
      </TagDiv>
      {isOverflowing && <TooltipDiv {...coord}>{tagText}</TooltipDiv>}
    </>
  );
};

export default TagLabel;
