import * as React from 'react';

import { SH2, SH3, SImage, SListItem } from './styled';

interface Props {
  artist: string;
  imageUrl: string;
  title: string;
}

const ListItem = ({ artist, imageUrl, title }: Props) => {
  return (
    <SListItem>
      <SImage data-test="item-image" src={imageUrl} />
      <SH2>{title}</SH2>
      <SH3>by {artist}</SH3>
    </SListItem>
  );
};

export default ListItem;
