// import React from "react";
import { tracks } from "../../mock/tracks";
import TrackList from "../TrackList/TrackList";

const SearchResults = () => {
  return (
    <div
      id="SearchResults"
      className="flex flex-col bg-neutral-900 rounded-md p-5 items-start gap-5 w-full h-full"
    >
      <h2 className="text-lg font-semibold">Search results</h2>
      <TrackList tracks={tracks} />
    </div>
  );
};

export default SearchResults;
