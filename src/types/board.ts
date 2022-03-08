export type Tag = { text: string; color: string };

export type Doc = {
  id: string;
  text: string;
  icon: string;
  tags: Tag[];
};

export type DocGroup = {
  title: string;
  slug: string;
  icon: string;
  docs: Doc[];
};
