import { IJoke } from '../interfaces/joke.interface';

const getJoke = async () => {
  const response = await fetch('https://v2.jokeapi.dev/joke/Dark?type=twopart');
  const data = await response.json();
  return data as IJoke;
};

export default getJoke;
