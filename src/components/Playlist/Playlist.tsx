import React, { useCallback } from "react";
import Button from "../Button/Button";
import { PlaylistProps } from "../../types/Track";
import TrackList from "../TrackList/TrackList";

const Playlist = ({
  tracks,
  playlistName,
  onNameChange,
  onRemove,
}: PlaylistProps) => {
  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onNameChange(e.target.value);
    },
    [onNameChange]
  );

  return (
    <div
      id="Playlist"
      className="flex flex-col bg-neutral-900 rounded-md p-5 items-center gap-5 w-full h-full"
    >
      <input
        name="playlist"
        type="text"
        value={playlistName}
        onChange={handleNameChange}
        placeholder="Name your playlist"
        className="bg-transparent text-neutral-100 text-lg font-semibold w-full focus:outline-none"
      />
      <TrackList tracks={tracks} isRemoval onRemove={onRemove} />
      <Button>Save To Spotify</Button>
    </div>
  );
};

export default Playlist;
