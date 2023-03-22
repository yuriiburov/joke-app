import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import AudioSvg from '../../assets/AudioSvg';
import { speakJoke } from '../../functions/speakJoke';
import useJoke from '../../hooks/useJoke';
import getJoke from '../../services/getJoke';
import JokeActions from '../joke-actions/JokeActions';
import JokeText from '../joke-text/JokeText';
import AudioButton from '../UI/AudioButton/AudioButton';
import Button from '../UI/Button/Button';
import classes from './JokeSection.module.scss';

const JokeSection = () => {
  const [setupIsReady, setSetupIsReady] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);

  const { data, isSuccess } = useJoke(isMute);

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
          <JokeActions />
        </div>
      )}
    </>
  );
};

export default JokeSection;
