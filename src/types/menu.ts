export type MenuLink = {
  icon: string;
  slug: string;
  text: string;
  cmd?: string[];
};

export type BoardMenu = {
  title: string;
  slug: string;
  links: MenuLink[];
};
