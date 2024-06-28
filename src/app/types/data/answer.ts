import { TCommentDTO } from './comment';

export type TAnswersDTO = {
  data: TAnswer[];
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

export type TAnswer = {
  id: number;
  votes: number;
  createdIn: Date;
  image: string;
  description: string;
  questionId: number;
  userId: string;
  commentsDto: TCommentDTO;
};
