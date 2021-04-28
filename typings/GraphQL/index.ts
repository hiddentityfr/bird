export type Node = {
  id: string;
};

export type Cursor = string;

export type PaginationFilterInput = {
  after: Cursor | null;
  first: number | null;
  before: Cursor | null;
  last: number | null;
};

type PageInfo = {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: Cursor | null;
  endCursor: Cursor | null;
};

type Edge<TNode> = {
  cursor: Cursor | null;
  node: TNode;
};

export type GenericPagination<TNode> = {
  totalCount: number;
  pageInfo: PageInfo;
  edges: Edge<TNode>[] | null;
};
