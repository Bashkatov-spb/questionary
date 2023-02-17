import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
// import { initQuestion, nextQuestion, savingStatistics } from './questionsSlice';

function Question(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { modules, questions, answers } = useSelector((state: RootState) => state.questions);
  const filteredModules = modules.filter((module) => module.themeId === Number(id));
  const modulesId = filteredModules.map((module) => module.id);
  const filteredQuestions = questions.filter((question) => modulesId.includes(question.moduleId));

  // useEffect(() => {
  //   if (!question) {
  //     dispatch(savingStatistics(statistics));
  //   }
  // }, [question]);

  return (
    <div>
      {}
      {/* <h2>{questions && questions[0].question}</h2> */}
      <div>
        {filteredQuestions &&
          filteredQuestions.map((question) => (
            <div>
              <h3>{question.question}</h3>
              {answers.map((answer) => {
                if (answer.questionId === question.id) {
                  return <p>{answer.answer}</p>;
                }
                return null;
              })}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Question;
