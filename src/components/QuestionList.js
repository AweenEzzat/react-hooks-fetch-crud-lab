import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {
  console.log('Rendering QuestionList with questions:', questions);
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map(question => (
          <QuestionItem key={question.id} question={question} setQuestions={setQuestions} questions={questions} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
