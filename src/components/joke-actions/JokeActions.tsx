import Button from '../UI/Button/Button';
import classes from './JokeActions.module.scss';

const JokeActions = () => {
  return (
    <div className={classes['joke-actions']}>
      <Button className={classes['joke-actions__next-btn']}>Next</Button>
      {/* <Button>test</Button> */}
    </div>
  );
};

export default JokeActions;
