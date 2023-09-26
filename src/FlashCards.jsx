import React, { useState } from "react";

const questions = [
  {
    id: 3467,
    question: "What language is React based on? ",
    answer: "JavaScript",
  },
  {
    id: 6574,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8764,
    question: "What's the name of the syntax we use to describe a UI in React",
    answer: "JSX",
  },
  {
    id: 1276,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 3578,
    question: "How to give components memory?",
    answer: "useState",
  },
  {
    id: 2336,
    question:
      "What do we call an input element that is completely sychronised with state",
    answer: "Controlled element",
  },
];

function FlashCards() {

  function handleClick(id) {
     setSelectedId(id !== selectedId ? id : null)
   }

  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className='flashcards'>
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FlashCards;
