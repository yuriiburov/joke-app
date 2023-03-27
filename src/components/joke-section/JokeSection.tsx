import { useState } from 'react';
import useJoke from '../../hooks/useJoke';
import JokeActions from '../joke-actions/JokeActions';
import JokeText from '../joke-text/JokeText';
import AudioButton from '../UI/AudioButton/AudioButton';
import classes from './JokeSection.module.scss';

const JokeSection = () => {
  const [isMute, setIsMute] = useState<boolean>(false);
  const { data, isSuccess, isLoading } = useJoke(isMute);

  return (
    <>
      {isSuccess && (
        <div className={classes['joke-section']}>
          <div className={classes['joke-section__main']}>
            <div className={classes['joke-section__text-field']}>
              <JokeText text={`${data.setup}\n${data.delivery}`} />
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
