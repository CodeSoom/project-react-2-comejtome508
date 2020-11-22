import React, { useState } from 'react';

import Choices from './Choices';
import Question from './Question';
import List from './List';

export default function App() {
  const [state, setState] = useState({
    questions: [
      {
        id: 1,
        title : '숨이 온전하게 쉬어집니까?',
      },
      {
        id: 2,
        title : '손발이 온전하게 움직입니까?',
      },
    ],
  });

  const choices = [
    {
      id: 1,
      content: '선택된 질문 1',
    },
    {
      id: 2,
      content: '선택된 질문 2',
    },
  ];

  const { questions, choices } = state;

  return (
    <div>
      <List list={choices} />
      <hr />
      <Question questions={questions} />
      <Choices />
    </div>
  );
}