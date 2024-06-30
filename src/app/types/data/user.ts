export type TUser = {
  id: string;
  votes: number;
  userName: string;
};

export type TUserProfile = {
  id: string;
  votes: number;
  userName: string;
  userProfileAnswers: TUserProfileAnswer[];
  userProfileQuestions: TUserProfileQuestion[];
};

export type TUserProfileAnswer = {
  answerId: number;
  questionId: number;
  votes: number;
  questionTitle: string;
  answerContent: string;
};

export type TUserProfileQuestion = {
  id: number;
  description: string;
  title: string;
  image: string;
  createdIn: string;
};
