import { Center, Container, SimpleGrid } from '@mantine/core';
import React, { useRef, useState } from 'react';
import { useCardImageMutation } from '../api/cards.ts';
import noResolvedLogo from '../assets/talkspirit_logo-dark-p-500.png';
import { getImageBySlug } from '../helper/resolvedCard.ts';
import { ResolvedCardType } from '../types/game.type.ts';
import { CardGame } from './CardGame.tsx';
import { URL_BASE } from '../api/env.ts';


interface Props {
  slug: string;
  board: string[];
  resolvedCards: ResolvedCardType[];
  onResolve: (positions: [number, number], id: string) => void;
}

export const Game: React.FC<Props> = ({ slug, board, resolvedCards, onResolve }) => {
  const [selectedImages, setSelectedImages] = useState([
    noResolvedLogo,
    noResolvedLogo,
  ]);
  const selectedPositions = useRef<number[]>([]);
  const { trigger: getCardImageMutation } = useCardImageMutation();

  const handleClick = async (i: number) => {
    if (selectedPositions.current.length === 2) return;

    selectedPositions.current.push(i);

    const { data } = await getCardImageMutation<ResolvedCardType>({
      _arg1: slug,
      _arg2: i.toString(),
    });
    const updatedSelectedImages = [...selectedImages];
    updatedSelectedImages[selectedPositions.current.length - 1] =
      `${URL_BASE}/${data.image}`;
    setSelectedImages(updatedSelectedImages);

    if (selectedPositions.current.length === 2) {
      setTimeout(() => {
        const firstPosition = selectedPositions.current[0]
        const secondPosition = selectedPositions.current[1]

        setSelectedImages([noResolvedLogo, noResolvedLogo]);
        selectedPositions.current = [];
        onResolve(
          [firstPosition, secondPosition],
          slug,
        );
      }, 2000);
    }
  };

  return (
    <Container size="responsive" bg="var(--mantine-color-blue-light)">
      <Center>
        <h3>{slug}</h3>
      </Center>
      <SimpleGrid
        cols={{ sm: 2, lg: 5 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {board.map((slug, i) => (
          <CardGame
            key={i}
            slug={slug}
            image={
              selectedPositions.current.includes(i)
                ? selectedImages[selectedPositions.current.indexOf(i)]
                : getImageBySlug(slug, resolvedCards)
            }
            onClick={() => handleClick(i)}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};
