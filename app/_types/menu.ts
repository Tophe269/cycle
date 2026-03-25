export type MenuLink = {
  icon: string;
  slug: string;
  text: string;
  letters?: string[];
};

export type BoardMenu = {
  title: string;
  slug: string;
  links: MenuLink[];
};
