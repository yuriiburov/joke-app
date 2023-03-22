import { FC, useEffect } from 'react';
import useTypingJoke from '../../hooks/useTypingJoke';

interface Props {
  text: string;
  setSetupIsReady?: React.Dispatch<React.SetStateAction<boolean>>;
}

const JokeText: FC<Props> = ({ text, setSetupIsReady }) => {
  const jokeText = useTypingJoke(text);

  useEffect(() => {
    if (jokeText.length !== text.length || !setSetupIsReady) return;

    setSetupIsReady(true);
  }, [jokeText]);

  return <div>{jokeText}</div>;
};

export default JokeText;
