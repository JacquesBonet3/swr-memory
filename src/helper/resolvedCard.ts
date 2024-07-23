import { URL_BASE } from '../api/env.ts';
import { NoResolvedCard, ResolvedCardType } from '../types/game.type.ts';

export const getImageBySlug = (
  slug: string,
  resolvedCards: ResolvedCardType[],
): string => {
  const matchedCard = resolvedCards.find(
    (resolvedCard) => resolvedCard.slug === slug,
  );
  return matchedCard
    ? `${URL_BASE}/${matchedCard.image}`
    : NoResolvedCard.image;
};
