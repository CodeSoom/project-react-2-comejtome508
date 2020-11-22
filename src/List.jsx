import React from 'react';

export default function List ({ choices }) {
  return (
    <li>
      {choices.map((choice) => (
        <p key={choice.id}>
          {choice.content}
        </p>
      ))}
    </li>
  );
} 