import { FC, memo } from 'react';
import useTypingJoke from '../../hooks/useTypingJoke';
import Props from './JokeText.interface';
import classes from './JokeText.module.scss';

const JokeText: FC<Props> = ({ text }) => {
  const jokeText = useTypingJoke(text);

  return <pre className={classes['joke-text']}>{jokeText}</pre>;
};

export default memo(JokeText);
