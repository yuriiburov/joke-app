import JokeSection from '../joke-section/JokeSection';
import classes from './Home.module.scss';

const Home = () => {
  return (
    <div className={classes.home}>
      <JokeSection />
    </div>
  );
};

export default Home;
