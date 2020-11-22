import React from 'react';

import { render } from '@testing-library/react';

import Question from './Question';

test('Question', () => {
  const questions = {
    id: 1,
    title: '질문 예시 입니까?',
  };

  const { container } = render((
    <Question questions={questions} />
  ));

  expect(container).toHaveTextContent('질문 예시 입니까?');
});