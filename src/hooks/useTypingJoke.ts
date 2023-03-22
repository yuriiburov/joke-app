import { useState, useEffect, useRef } from 'react';

const useTypingJoke = (joke: string) => {
  const [revealedLetters, setRevealedLetters] = useState<number>(0);
  const interval = setInterval(
    () => setRevealedLetters((prev) => prev + 1),
    50
  );

  useEffect(() => {
    if (revealedLetters === joke.length) {
      clearInterval(interval);
    }
  }, [joke, interval, revealedLetters]);

  useEffect(() => {
    return () => clearInterval(interval);
  }, [interval]);

  return joke.substring(0, revealedLetters);
};

// const useTypingJoke = (joke: string) => {
//   const [text, setText] = useState<string>('');
//   const intervalIdRef = useRef<number>();

//   useEffect(() => {
//     let textIndex = 0;

//     const interval = setInterval(() => {
//       if (textIndex === joke.length) {
//         clearInterval(intervalIdRef.current);
//         return;
//       }
//       setText((prevText) => prevText + joke.charAt(textIndex));
//       textIndex += 1;
//     }, 50);

//     intervalIdRef.current = interval;

//     return () => {
//       clearInterval(intervalIdRef.current);
//     };
//   }, [joke]);

//   return text;
// };

// const useTypingJoke = (joke: string) => {
//   const [text, setText] = useState<string>('');

//   let textIndex = 0;

//   const typing = () => {
//     console.log(textIndex);
//     if (textIndex === joke.length) return;

//     setText((prevText) => prevText + joke.charAt(textIndex - 1));
//     textIndex += 1;
//     setTimeout(typing, 50);
//   };
//   typing();

//   return text;
// };

export default useTypingJoke;
