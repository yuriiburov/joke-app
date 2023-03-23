import { useEffect, useState } from 'react';
import useJoke from '../../hooks/useJoke';
import JokeActions from '../joke-actions/JokeActions';
import JokeText from '../joke-text/JokeText';
import AudioButton from '../UI/AudioButton/AudioButton';
import classes from './JokeSection.module.scss';

const JokeSection = () => {
  const [setupIsReady, setSetupIsReady] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);

  const { data, isSuccess, isLoading } = useJoke(isMute, setSetupIsReady);

  useEffect(() => {
    setSetupIsReady(false);
  }, [data]);

  return (
    <>
      {isSuccess && (
        <div className={classes['joke-section']}>
          <div className={classes['joke-section__main']}>
            <div className={classes['joke-section__text-field']}>
              <JokeText text={data.setup} setSetupIsReady={setSetupIsReady} />
              {setupIsReady && <JokeText text={data.delivery} />}
            </div>
            <AudioButton isMute={isMute} setIsMute={setIsMute} />
          </div>
          <JokeActions jokeId={data.id} />
        </div>
      )}
      {isLoading && <div className={classes['joke-section']}>Loading</div>}
    </>
  );
};

export default JokeSection;
