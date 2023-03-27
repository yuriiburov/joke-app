import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { speakJoke } from '../functions/speak-joke/speakJoke';
import { IJoke } from '../interfaces/joke.interface';
import getJoke from '../services/getJoke';

const useJoke = (isMute: boolean): UseQueryResult<IJoke, unknown> => {
  const query = useQuery({
    queryKey: ['joke'],
    queryFn: getJoke,
    refetchOnWindowFocus: false,
    onSuccess: ({ setup, delivery }) => {
      speakJoke(`${setup} ${delivery}`, isMute);
    },
  });

  return query;
};

export default useJoke;
