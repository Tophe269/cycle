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
  isSideBarOpen: boolean;
};

const MenuSimpleLink = ({
  slug,
  text,
  icon,
  letters,
  isSideBarOpen,
}: MenuSimpleLinkProps) => (
  <Link href={slug} passHref>
    <a>
      <LinksLi>
        <LinksLiIconSpan isSideBarOpen={isSideBarOpen}>
          {Icons[icon]}
        </LinksLiIconSpan>
        <LinksLiTextSpan isSideBarOpen={isSideBarOpen}>{text}</LinksLiTextSpan>
        {letters?.map((letter: string) => (
          <LinksLiLetterSpan key={`Letter-${letter}`}>
            {Letters[letter]}
          </LinksLiLetterSpan>
        ))}
      </LinksLi>
    </a>
  </Link>
);

export default MenuSimpleLink;
