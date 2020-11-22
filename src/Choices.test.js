import React from 'react';

import Question from './Choices';

import { render } from '@testing-library/react';

test('Choices', () => {
  const { getByText } = render((
    <Question />
  ));

  expect(getByText(/예/)).not.toBeNull();
  expect(getByText(/아니오/)).not.toBeNull();
});