export type TResponse<T> = {
  statusCode: number;
  meta: unknown;
  succeeded: boolean;
  message: string;
  errors: unknown;
  data: T;
};

export type TPaginatedResponse<T> = {
  statusCode: number;
  meta: unknown;
  succeeded: boolean;
  message: string;
  errors: unknown;
  data: {
    data: T;
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
};
