import React, { useState } from 'react';

import Choices from './Choices';
import Question from './Question';

function List() {
  return null;
}

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

  const { questions } = state;

  return (
    <div>
      <List />
      <hr />
      <Question questions={questions} />
      <Choices />
    </div>
  );
}