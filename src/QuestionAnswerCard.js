import React, { useState } from 'react';
import './QuestionAnswerCard.css';

const QuestionAnswerCard = ({question, answer, onNext, onRestart, lastCard}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    return (
        <div className="card" onClick={toggleAnswer}>
            {showAnswer ? (
                <div className="answer center">
                    <div>{answer}</div>
                    {lastCard ? (
                        <button onClick={onRestart}>RESTART</button>
                    ) : (
                        <button onClick={onNext}>NEXT</button>
                    )}
                </div>
            ) : (
                <div className="question center">{question}</div>
            )}
        </div>
    )
};

export default QuestionAnswerCard;