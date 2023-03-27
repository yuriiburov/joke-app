import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import JokeText from './JokeText';

describe('JokeText', () => {
  it('should reveal joke letters one by one', async () => {
    const joke = 'test';

    render(<JokeText text={joke} />);

    expect(screen.queryByText(joke)).not.toBeInTheDocument();

    for (let i = 1; i <= joke.length; i++) {
      const revealedText = joke.substring(0, i);
      await waitFor(() => {
        expect(screen.getByText(revealedText)).toBeInTheDocument();
      });
    }
  });
});
