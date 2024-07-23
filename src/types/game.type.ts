import NoResolvedLogo from '../assets/talkspirit_logo-dark-p-500.png';

type ResolvedCardType = {
  slug: string;
  image: string;
};

type GameType = {
  slug: string;
  board: string[];
  resolvedCards: ResolvedCardType[];
};

type PositionsType = {
  positions?: number[];
};

type LevelType = {
  level?: string;
};

type Arg1Type = {
  _arg1?: string;
};

type Arg2Type = {
  _arg2?: string;
};


type ArgType = (LevelType | PositionsType | null) & Arg1Type & Arg2Type;

export const EmptyGame: GameType = {
  slug: 'empty-game',
  board: [],
  resolvedCards: [],
};

export const NoResolvedCard = {
  slug: '?',
  image: NoResolvedLogo,
};

export type {
  GameType,
  ResolvedCardType,
  LevelType,
  Arg1Type,
  Arg2Type,
  ArgType,
};
