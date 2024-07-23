import { RESOURCES } from './env.ts';
import { usePost } from './usePost.ts';

export const useCreateGameMutation = () => usePost(RESOURCES.GAMES);

export const useGameResolveMutation = () => usePost(RESOURCES.GAME_RESOLVE);
