import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('renders QuestionAnswerCard with object data', () => {
  const questionAnswers = [
    {
      question: "Test Question",
      answer: "Test Answer"
    }
  ];
  const wrapper = shallow(<App questionAnswers={questionAnswers}/>);
  const card = wrapper.find("QuestionAnswerCard");
  expect(card.props.question).toEqual(questionAnswers.question);
  expect(card.props.answer).toEqual(questionAnswers.answer);
});
