export type SongsInstance = {
  selectedTrack: any;
  selectTrack: (albumId: string, trackId: number) => void;
  selectPrevious: () => void;
  selectNext: () => void;
};

export type Song = {
  id: number;
  album_id: string;
  artist: string;
  cover: string;
  title: string;
  url: string;
};

export type ProviderValue = SongsInstance;

type DefaultValue = undefined;

export type ContextValue = DefaultValue | ProviderValue;
