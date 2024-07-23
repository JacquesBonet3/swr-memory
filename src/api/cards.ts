import { RESOURCES } from './env.ts';
import { useGet } from './useFetch.ts';

export const useCardImageMutation = () => useGet(RESOURCES.GAME_CARD_IMAGE);

