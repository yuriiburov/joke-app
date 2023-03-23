import { FC } from 'react';
import NextButton from '../UI/NextButton/NextButton';
import StarButton from '../UI/StarButton/StarButton';
import classes from './JokeActions.module.scss';

interface Props {
  jokeId: number;
}

const JokeActions: FC<Props> = ({ jokeId }) => {
  return (
    <div className={classes['joke-actions']}>
      <NextButton />
      <StarButton jokeId={jokeId} />
    </div>
  );
};

export default JokeActions;
