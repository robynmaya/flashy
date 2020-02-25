import React, { useState, useEffect } from 'react';
import logo from './logo.png';
import './App.css';
import PropTypes from 'prop-types';
import QuestionAnswerCard from './QuestionAnswerCard';

function App({questionAnswers}) {
  const [cards, setCards] = useState(questionAnswers);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const shuffle = () => {
    cards.sort(() => Math.random() - 0.5);
    setCards(cards);
    setActiveCardIndex(0);
  };

  const nextCard = () => {
    setActiveCardIndex(activeCardIndex + 1)
  };

  useEffect(shuffle, []);

  const activeCard = cards[activeCardIndex];
  const lastCard = activeCardIndex === cards.length - 1;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <QuestionAnswerCard 
        question={activeCard.question}
        answer={activeCard.answer}
        onNext={nextCard}
        lastCard={lastCard}
        onRestart={shuffle}
      />
    </div>
  );
}

App.propTypes = {
  questionAnswers: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}
export default App;
