import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { speakJoke } from '../functions/speakJoke/speakJoke';
import { IJoke } from '../interfaces/joke.interface';
import getJoke from '../services/getJoke';

const useJoke = (
  isMute: boolean,
  setSetupIsReady: React.Dispatch<React.SetStateAction<boolean>>
): UseQueryResult<IJoke, unknown> => {
  const query = useQuery({
    queryKey: ['joke'],
    queryFn: getJoke,
    refetchOnWindowFocus: false,
    onSuccess: ({ setup, delivery }) => {
      setSetupIsReady(false);
      speakJoke(`${setup} ${delivery}`, isMute);
    },
  });

  return query;
};

export default useJoke;
