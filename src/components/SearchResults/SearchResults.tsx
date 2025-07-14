// import React from "react";
import TrackList from "../TrackList/TrackList";
import { ITrack } from "../../types/Track";

const SearchResults = ({
  tracks,
  onAdd,
}: {
  tracks: ITrack[];
  onAdd?: (track: ITrack) => void;
}) => {
  return (
    <div
      id="SearchResults"
      className="flex flex-col bg-neutral-900 rounded-md p-5 items-start gap-5 w-full h-full select-none"
    >
      <h2 className="text-lg font-semibold">Search results</h2>
      {tracks ? (
        <TrackList tracks={tracks} isRemoval={false} onAdd={onAdd} />
      ) : (
        <p className="text-neutral-400">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
