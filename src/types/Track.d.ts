export interface ITrack {
  id: string;
  name: string;
  artist: string;
  album: string;
}

export type TrackProps = {
  track: ITrack;
  onAdd?: (track: ITrack) => void;
  onRemove?: (track: ITrack) => void;
  isRemoval?: boolean;
};

export type TrackListProps = {
  tracks: ITrack[];
  onAdd?: (track: ITrack) => void;
  isRemoval?: boolean;
  onRemove?: (track: ITrack) => void;
};

export type PlaylistProps = {
  tracks: ITrack[];
  playlistName: string;
  onNameChange: (e: string) => void;
  onRemove: (track: ITrack) => void;
};
