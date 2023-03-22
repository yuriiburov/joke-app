type jokeCategoryType =
  | 'Programming'
  | 'Misc'
  | 'Dark'
  | 'Pun'
  | 'Spooky'
  | 'Christmas';

type jokeType = 'twopart' | 'single';

type jokeLangType = 'en' | 'de' | 'cs' | 'es' | 'fr' | 'pt';

interface IJokeFlags {
  explicit: boolean;
  nsfw: boolean;
  political: boolean;
  racist: boolean;
  religious: boolean;
  sexist: boolean;
}

export interface IJoke {
  category: jokeCategoryType;
  delivery: string;
  error: boolean;
  flags: IJokeFlags;
  id: number;
  lang: jokeLangType;
  safe: boolean;
  setup: string;
  type: jokeType;
}
