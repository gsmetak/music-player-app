import * as React from 'react';

import { SCard, SH3, SImage, SLink } from './styled';

interface Props {
  id: string;
  imageUrl: string;
  title: string;
}

const Card = ({ id, imageUrl, title }: Props) => {
  return (
    <SCard>
      <SLink to={`albums/${id}`}>
        <SImage data-test="card-image" src={imageUrl} />
        <SH3>{title}</SH3>
      </SLink>
    </SCard>
  );
};

export default Card;
