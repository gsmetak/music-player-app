export type SongsInstance = {
  selectedTrack: any;
  isSongLoading: boolean;
  setIsSongLoading: (value: boolean) => void;
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
