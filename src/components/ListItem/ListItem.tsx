import * as React from 'react';

import { SH2, SH3, SImage, SListItem } from './styled';

interface Props {
  artist: string;
  imageUrl: string;
  id: number;
  title: string;
  selectTrack: (trackId: number) => void;
}

const ListItem = ({ artist, id, imageUrl, title, selectTrack }: Props) => {
  return (
    <SListItem onClick={() => selectTrack(id)}>
      <SImage data-test="item-image" src={imageUrl} />
      <SH2>{title}</SH2>
      <SH3>by {artist}</SH3>
    </SListItem>
  );
};

export default ListItem;
