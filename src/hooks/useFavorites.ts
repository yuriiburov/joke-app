import { useEffect, useState } from 'react';

const useFavorites = (jokeId: number) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]'
  );

  const toggleFavorite = () => {
    const includesCurrentJoke: number[] = [...favorites, jokeId];
    const withoutCurrentJoke: number[] = favorites.filter(
      (id) => id !== jokeId
    );
    const newFavorites: number[] = isFavorite
      ? withoutCurrentJoke
      : includesCurrentJoke;
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(jokeId));
  }, [jokeId]);

  return { toggleFavorite, isFavorite };
};

export default useFavorites;
