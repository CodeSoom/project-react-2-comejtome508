import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

test('List', () => {
  const choices = [
  {
    id: 1,
    title: 'Saved Question 1',
  },
];

  const { container } = render((
    <List />
  ));

  expect(container).toHaveTextContent('Saved Question 1');
});