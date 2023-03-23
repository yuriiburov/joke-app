import { FC, useEffect, useState } from 'react';
import StarSvg from '../../../assets/StarSvg';
import useFavorites from '../../../hooks/useFavorites';
import Button from '../Button/Button';
import classes from './StarButton.module.scss';

interface Props {
  jokeId: number;
}

const StarButton: FC<Props> = ({ jokeId }) => {
  const { isFavorite, toggleFavorite } = useFavorites(jokeId);

  return (
    <Button
      onClick={toggleFavorite}
      className={`${classes['star-btn']} ${
        isFavorite ? classes['star-btn_favorite'] : ''
      }`}
    >
      <StarSvg width={33} height={33} />
    </Button>
  );
};

export default StarButton;
