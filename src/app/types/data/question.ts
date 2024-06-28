import { TAnswersDTO } from './answer';

export type TQuestion = {
  id: number;
  description: string;
  title: string;
  image: string;
  createdIn: string;
  categoryName: string;
  userName: string;
  answers: any[];
};

export type TPaginatedQuestion = {
  id: number;
  description: string;
  title: string;
  image: string;
  createdIn: Date;
  categoryId: number;
  userId: string;
  answersDto: TAnswersDTO;
};
