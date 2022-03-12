/* eslint-disable testing-library/no-container */
/* eslint-disable testing-library/no-node-access */

/*
 * As a general rule, we shouldn't use `container` when testing with
 * React Testing Library. However, since this component is just rendering
 * some text, and there is no Button or any other meaningful component to
 * test on here, we've decided this is better than using a custom match function.
 *
 * You should only replicate this pattern if there's really no other good
 * alternative (and there usually will be!). If you find yourself about to
 * replicate this, reach out to one of the React/TypeScript/Frontend Subject
 * Matter Experts and double check that this is really the best thing to do.
 */

import { render, screen } from '@testing-library/react';
import { Text } from './Text';

it('renders text correctly as the default', () => {
  const innerText = 'Forward Financing';
  render(<Text>{innerText}</Text>);

  expect(screen.getByText(innerText)).toBeInTheDocument();

  expect(screen.getByText(innerText)).toHaveStyle({
    fontSize: 'var(--font-size-0)',
    fontWeight: 'var(--font-weight-normal)',
    color: 'var(--color-black)',
  });
});

it('renders italic text correctly', () => {
  const innerText = 'Forward Financing';
  const { container } = render(<Text italic>{innerText}</Text>);

  expect(screen.getByText(innerText)).toBeInTheDocument();

  expect(container.querySelector('p')).toHaveTextContent(innerText);
  expect(container.querySelector('em')).toHaveTextContent(innerText);
});

it('renders bold text correctly', () => {
  const innerText = 'Forward Financing';
  const { container } = render(<Text bold>{innerText}</Text>);

  expect(screen.getByText(innerText)).toBeInTheDocument();

  expect(container.querySelector('p')).toHaveTextContent(innerText);
  expect(container.querySelector('strong')).toHaveTextContent(innerText);
});

it('renders danger text correctly', () => {
  const innerText = 'Forward Financing';
  const { container } = render(<Text color="danger">{innerText}</Text>);

  expect(screen.getByText(innerText)).toBeInTheDocument();

  expect(container.querySelector('p')).toHaveTextContent(innerText);
  expect(container.querySelector('span')).toHaveTextContent(innerText);
  expect(container.querySelector('span')).toHaveStyle({
    color: 'var(--color-red-700)',
  });
});

it('renders nested Text components correctly', () => {
  const { container } = render(
    <Text>
      This paragraph <Text italic>has italic text</Text>{' '}
      <Text bold>and bold text</Text>{' '}
      <Text color="danger">and danger text</Text>.
    </Text>
  );

  expect(container.querySelector('p')).toHaveTextContent(
    'This paragraph has italic text and bold text and danger text.'
  );
  expect(container.querySelector('em')).toHaveTextContent('has italic text');
  expect(container.querySelector('strong')).toHaveTextContent('and bold text');
  expect(container.querySelector('span')).toHaveTextContent('and danger text');
});

it('renders Text components with more than one style prop correctly', () => {
  const { container } = render(
    <Text>
      This paragraph{' '}
      <Text bold>
        <Text italic color="danger">
          has text that is italic AND bold AND red
        </Text>{' '}
        and bold text
      </Text>
      .
    </Text>
  );

  expect(container.querySelector('p')).toHaveTextContent(
    'This paragraph has text that is italic AND bold AND red and bold text.'
  );
  expect(container.querySelector('em')).toHaveTextContent(
    'has text that is italic AND bold AND red'
  );
  expect(container.querySelector('span')).toHaveTextContent(
    'has text that is italic AND bold AND red'
  );
  expect(container.querySelector('strong')).toHaveTextContent(
    'has text that is italic AND bold AND red and bold text'
  );
});
