export interface Answer {
  id: number;
  answer: string;
  status: boolean;
  questionId: number;
}
export interface Question {
  id:number;
  moduleId: number;
  question: string;
  Answers: Answer[];
}

export interface  QuestionState {
questions:Question[];
question:null | Question;
statistics: [] | Statistic[]
error: undefined | string,
}

export interface Statistic {
  questionId: number;
  moduleId: number;
  rights: boolean;
}
export interface PayloadNextQuestion {
  id:number;
  moduleId: number;
  question: string;
  Answers: Answer[];
  status: boolean;
}
