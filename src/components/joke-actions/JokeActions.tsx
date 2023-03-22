import Button from '../UI/Button/Button';
import NextButton from '../UI/NextButton/NextButton';
import classes from './JokeActions.module.scss';

const JokeActions = () => {
  return (
    <div className={classes['joke-actions']}>
      <NextButton />
      {/* <Button>test</Button> */}
    </div>
  );
};

export default JokeActions;
