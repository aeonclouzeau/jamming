interface ITrack {
  id: string;
  name: string;
  artist: string;
  album: string;
  images: string[];
  uri: string;
}

type TrackProps = {
  track: ITrack;
  onAdd?: (track: ITrack) => void;
  onRemove?: (track: ITrack) => void;
  isRemoval?: boolean;
};

type TrackListProps = {
  tracks: ITrack[];
  onAdd?: (track: ITrack) => void;
  isRemoval?: boolean;
  onRemove?: (track: ITrack) => void;
};

type PlaylistProps = {
  tracks: ITrack[];
  playlistName: string;
  onNameChange: (e: string) => void;
  onRemove: (track: ITrack) => void;
};

export { PlaylistProps, TrackListProps, TrackProps, ITrack };
