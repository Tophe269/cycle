import Link from "next/link";
import {
  LinksLi,
  LinksLiIconSpan,
  LinksLiTextSpan,
  LinksLiLetterSpan,
} from "./styles";
import Image from "next/image";

import { MenuLink } from "@/types/menu";

import Icons from "./Icons";

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
        <LinksLiIconSpan>{Icons[icon]}</LinksLiIconSpan>
        <LinksLiTextSpan>{text}</LinksLiTextSpan>
        {letters?.map((letter: string) => (
          <LinksLiLetterSpan key={`Letter-${letter}`}>
            <Image
              src={`/letters/${letter}.svg`}
              alt={`Letter ${letter}`}
              width={16}
              height={16}
            />
          </LinksLiLetterSpan>
        ))}
      </LinksLi>
    </a>
  </Link>
);

export default MenuSimpleLink;
