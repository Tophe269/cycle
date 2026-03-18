export type TagColor = "green" | "blue" | "lightBlue" | "pink" | "yellow";

export type Tag = { text: string; color?: TagColor };

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
