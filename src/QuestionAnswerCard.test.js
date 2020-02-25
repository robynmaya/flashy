import React from 'react';
import QuestionAnswerCard from './QuestionAnswerCard';
import { shallow } from 'enzyme';
import { stub } from 'sinon';

test('click card shows answer and next button', () => {
  const onNext = stub();
  const wrapper = shallow(<QuestionAnswerCard onNext={onNext} question="Question" answer="Answer" />);
  const card = wrapper.find(".card");
  card.simulate('click');
  const btn = wrapper.find("button");
  expect(btn.text()).toEqual('NEXT');
  btn.simulate('click');
  expect(onNext.callCount).toEqual(1);
});

test('click restart calls onRestart', () => {
  const onRestart = stub();
  const wrapper = shallow(<QuestionAnswerCard lastCard onRestart={onRestart} question="Question" answer="Answer" />);
  const card = wrapper.find(".card");
  card.simulate('click');
  const btn = wrapper.find("button");
  expect(btn.text()).toEqual('RESTART');
  btn.simulate('click');
  expect(onRestart.callCount).toEqual(1);
});
