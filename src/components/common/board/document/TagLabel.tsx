import { useRef, useEffect, useState, useCallback, FC } from "react";

import { Tag } from "@/types/board";

import { TagDiv, TooltipDiv } from "./styles";

const TagLabel: FC<Tag> = ({ text: tagText, color }) => {
  const tagRef = useRef<HTMLDivElement>(null);
  const [coord, setCoord] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [isOverflowing, setIsOverflowing] = useState<boolean>(false);

  const calculateTooltipPosition = useCallback(() => {
    const { top, left, width } = tagRef?.current?.getBoundingClientRect() || {
      top: 0,
      left: 0,
      width: 0,
    };
    setCoord({ top, left: left + width / 2 });
  }, [tagRef]);

  useEffect(() => {
    if (tagRef?.current) {
      const { clientWidth, scrollWidth } = tagRef.current || {
        clientWidth: 0,
        scrollWidth: 0,
      };
      setIsOverflowing(clientWidth < scrollWidth);
    }
  }, [tagRef]);

  return (
    <>
      <TagDiv
        ref={tagRef}
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
