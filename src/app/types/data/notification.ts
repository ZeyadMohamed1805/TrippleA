export type TNotification = {
  id: number;
  message: string;
  isRead: boolean;
  userId: string;
  responder: string;
  createdIn: Date;
  questionId: number;
};
