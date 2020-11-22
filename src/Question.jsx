import React from 'react';

export default function Question ({questions}) {
  console.log(questions);
  return (
    <div>
      {questions[0].title}
    </div>
  );
} 