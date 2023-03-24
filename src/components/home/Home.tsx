import { useEffect, useState } from 'react';
import { speakJoke } from '../../functions/speakJoke/speakJoke';
import JokeSection from '../joke-section/JokeSection';
import classes from './Home.module.scss';

const Home = () => {
  // const [setup, setSetup] = useState<string>('');
  // const [delivery, setDelivery] = useState<string>('');
  // const [text, setText] = useState<string>('');

  // const joke = `${setup} ${delivery}`;

  // useEffect(() => {
  //   fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       setSetup(response.setup);
  //       setDelivery(response.delivery);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (!setup) return;
  //   if (!delivery) return;
  //   typingJoke();
  //   speakJoke(joke);
  // }, [setup, delivery]);

  return (
    <div className={classes.home}>
      <JokeSection />
    </div>
  );
};

export default Home;
