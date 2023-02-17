export interface Answer {
  id: number;
  answer: string;
  status: boolean;
  questionId: number;
}
export interface Question {
  id: number;
  moduleId: number;
  question: string;
  Answers: Answer[];
}

export interface Module {
  id: number;
  title: string;
  themeId: number;
}

export interface Theme {
  id: number;
  title: string;
}

export interface QuestionsState {
  answers: Answer[];
  themes: Theme[];
  modules: Module[];
  questions: Question[];
  question: null | Question;
  statistics: [] | Statistic[];
  error: undefined | string;
}

export interface Statistic {
  questionId: number;
  moduleId: number;
  rights: boolean;
}
export interface PayloadNextQuestion {
  id: number;
  moduleId: number;
  question: string;
  Answers: Answer[];
  status: boolean;
}

export interface ModuleState {}
