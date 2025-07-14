export type RawSpotifyTrack = {
  id: string;
  name: string;
  album: {
    name: string;
    images: { url: string }[];
  };
  artists: { name: string }[];
  uri: string;
};
