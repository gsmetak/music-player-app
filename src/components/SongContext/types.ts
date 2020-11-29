export type SongsInstance = {
  selectedTrack: any;
  selectTrack: (albumId: string, trackId: number) => void;
  getPrevious: () => void;
  getNext: () => void;
};

export type ProviderValue = SongsInstance;

type DefaultValue = undefined;

export type ContextValue = DefaultValue | ProviderValue;
