import React from 'react';

import { render } from '@testing-library/react';

test('Question', () => {
  const { getByText } = render((
    <Question />
  ));

  expect(getByText(/예/)).not.toBeNull();
  expect(getByText(/아니오/)).not.toBeNull();
});