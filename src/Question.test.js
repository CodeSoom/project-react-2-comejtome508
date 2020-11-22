import React from 'react';

import Question from './Question';

import { render } from '@testing-library/react';

test('Question', () => {
  const { getByText } = render((
    <Question />
  ));
});