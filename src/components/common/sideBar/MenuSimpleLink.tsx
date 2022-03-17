import { FC } from "react";
import Link from "next/link";
import {
  LinksLi,
  LinksLiIconSpan,
  LinksLiTextSpan,
  LinksLiLetterSpan,
} from "./styles";

import { MenuLink } from "@/types/menu";

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
}) => (
  <Link href={slug} passHref>
    <a>
      <LinksLi>
        <LinksLiIconSpan isSideBarExtended={isSideBarExtended}>
          {Icons[icon]}
        </LinksLiIconSpan>
        <LinksLiTextSpan isSideBarExtended={isSideBarExtended}>
          {text}
        </LinksLiTextSpan>
        {letters?.map(
          (letter: string): JSX.Element => (
            <LinksLiLetterSpan key={`Letter-${letter}`}>
              {Letters[letter]}
            </LinksLiLetterSpan>
          ),
        )}
      </LinksLi>
    </a>
  </Link>
);

export default MenuSimpleLink;
