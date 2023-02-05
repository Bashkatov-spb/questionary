import { Statistic } from "./types/Question";

export async function postSavingStatistics(action:Statistic[]){
  const result = await fetch('http://localhost:4000/api/statistics', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
   body: JSON.stringify({statistics:action})
  });
  return result.json();
 }
