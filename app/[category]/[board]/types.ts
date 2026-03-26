export type BoardRouteParams = {
  category: string;
  board: string;
};

export type BoardRouteProps = {
  params: Promise<BoardRouteParams>;
};