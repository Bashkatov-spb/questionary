import { Answer, Module, Question, Statistic, Theme } from './types/Questions';

export async function getAllAnswers(): Promise<Answer[]> {
  const result = await fetch('http://localhost:4000/api/answers');
  return result.json();
}

export async function getAllQuestions(): Promise<Question[]> {
  const result = await fetch('http://localhost:4000/api/questions');
  return result.json();
}

export async function getAllModules(): Promise<Module[]> {
  const result = await fetch('http://localhost:4000/api/modules');
  return result.json();
}

export async function getAllThemes(): Promise<Theme[]> {
  const result = await fetch('http://localhost:4000/api/themes');
  return result.json();
}

export async function postSavingStatistics(action: Statistic[]): Promise<Statistic> {
  const result = await fetch('http://localhost:4000/api/statistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ statistics: action }),
  });
  return result.json();
}
