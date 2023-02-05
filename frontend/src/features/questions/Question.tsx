import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { initQuestion, nextQuestion, savingStatistics } from './questionsSlice';

function Question(): JSX.Element {
  const {id}=useParams()
  const dispatch = useAppDispatch();
  const {question,statistics} = useSelector((state:RootState) => state.questions);
  

  useEffect(()=>{
    dispatch(initQuestion(id));
  },[])

 useEffect(()=>{
  if(!question){
    dispatch(savingStatistics(statistics))
  }
 },[question])


  return (
    <div>
      <h2>{question && question.question}</h2>
      <div>
        {question && question.Answers.map(answer=><h3 onClick={()=>dispatch(nextQuestion({...question,status:answer.status}))}>{answer.answer}</h3>)}
      </div>
    </div>
  );
}

export default Question;
