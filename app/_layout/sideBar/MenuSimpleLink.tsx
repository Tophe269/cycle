import { FC, ReactElement } from "react";
import Link from "next/link";
import {
  LinksLi,
  LinksLiIconSpan,
  LinksLiTextSpan,
  LinksLiLetterSpan,
} from "./styles";

import { MenuLink } from "app/_types/menu";

import Icons from "./Icons";
import Letters from "./Letters";

type MenuSimpleLinkProps = MenuLink & {
  isSideBarExtended: boolean;
};

const MenuSimpleLink: FC<MenuSimpleLinkProps> = ({
  slug,
  text,
  icon,
  letters,
  isSideBarExtended,
}) => {
  const IconComponent = Icons[icon];
  return (
    <Link href={slug}>
      <LinksLi>
        <LinksLiIconSpan $isSideBarExtended={isSideBarExtended}>
          <IconComponent />
        </LinksLiIconSpan>
        <LinksLiTextSpan $isSideBarExtended={isSideBarExtended}>
          {text}
        </LinksLiTextSpan>
        {letters?.map((letter: string): ReactElement => {
          const LetterComponent = Letters[letter];
          return (
            <LinksLiLetterSpan key={`Letter-${letter}`}>
              <LetterComponent />
            </LinksLiLetterSpan>
          );
        })}
      </LinksLi>
    </Link>
  );
};

export default MenuSimpleLink;
