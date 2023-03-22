import { FC, useState } from 'react';
import AudioSvg from '../../../assets/AudioSvg';
import NoAudioSvg from '../../../assets/NoAudioSvg';
import Button from '../Button/Button';
import classes from './AudioButton.module.scss';

interface Props {
  isMute: boolean;
  setIsMute: React.Dispatch<React.SetStateAction<boolean>>;
}

const AudioButton: FC<Props> = ({ isMute, setIsMute }) => {
  const toggle = () => {
    setIsMute((prev) => !prev);
  };

  return (
    <Button className={classes['audio-btn']} onClick={toggle}>
      {isMute ? (
        <NoAudioSvg width={20} height={20} />
      ) : (
        <AudioSvg width={20} height={20} />
      )}
    </Button>
  );
};

export default AudioButton;
