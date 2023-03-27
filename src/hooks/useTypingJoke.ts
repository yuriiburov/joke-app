import { useState, useEffect } from 'react';

const useTypingJoke = (joke: string) => {
  const [revealedLetters, setRevealedLetters] = useState<number>(0);
  const interval = setInterval(
    () => setRevealedLetters((prev) => prev + 1),
    50
  );

  useEffect(() => {
    if (revealedLetters !== joke.length) return;
    clearInterval(interval);
  }, [joke, interval, revealedLetters]);

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  useEffect(() => {
    setRevealedLetters(0);
  }, [joke]);

  return joke.substring(0, revealedLetters);
};

export default useTypingJoke;
