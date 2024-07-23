import { Card, Image } from '@mantine/core';
import React, { MouseEventHandler } from 'react';

interface Props {
  slug: string;
  image: string;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}

export const CardGame: React.FC<Props> = ({ slug, image, onClick }) => {
  return (
    <Card
      component="a"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      bg="var(--mantine-color-green-light)"
      onClick={onClick}
    >
      <Card.Section inheritPadding mt="sm" pb="md">
        <Card shadow="sm" padding="lg" radius="100%">
          <Image src={image} height={160} alt={slug} />
        </Card>
      </Card.Section>
    </Card>
  );
};
