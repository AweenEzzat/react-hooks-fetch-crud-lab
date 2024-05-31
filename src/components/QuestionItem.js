import React from "react";

function QuestionItem({ question, questions, setQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setQuestions(questions.filter(q => q.id !== id));
      });
  };

  const handleUpdate = (e) => {
    const newCorrectIndex = parseInt(e.target.value, 10);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then(response => response.json())
      .then(updatedQuestion => {
        setQuestions(questions.map(q => (q.id === updatedQuestion.id ? updatedQuestion : q)));
      });
  };

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleUpdate}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
