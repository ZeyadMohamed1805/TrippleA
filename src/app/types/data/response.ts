export type TResponse<T> = {
  statusCode: number;
  meta: unknown;
  succeeded: boolean;
  message: string;
  errors: unknown;
  data: T;
};
