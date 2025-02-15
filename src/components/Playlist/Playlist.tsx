import React, { useState } from "react";
import Button from "../Button/Button";
import { ITrack } from "../../types/Track";
import TrackList from "../TrackList/TrackList";

const Playlist = ({ tracks }: { tracks: ITrack[] }) => {
  const [playlistName, setPlaylistName] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  return (
    <div
      id="Playlist"
      className="flex flex-col bg-neutral-900 rounded-md p-5 items-center gap-5 w-full h-full"
    >
      <input
        name="playlist"
        type="text"
        value={playlistName}
        onChange={handleChange}
        placeholder="Name the playlist"
        className="bg-transparent text-neutral-100 text-lg font-semibold w-full focus:outline-none"
      />
      {tracks && <TrackList tracks={tracks} />}
      <Button>Save To Spotify</Button>
    </div>
  );
};

export default Playlist;
