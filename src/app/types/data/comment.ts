export type TCommentDTO = {
  data: TComment[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  meta: null;
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  messages: [];
  succeeded: boolean;
};

export type TComment = {
  id: number;
  createdIn: Date;
  content: string;
  answerId: number;
  userId: string;
};
