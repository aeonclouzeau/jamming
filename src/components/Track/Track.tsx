// import React from "react";

const Track = () => {
  return (
    <div
      id="TrackList"
      className="flex items-center gap-4 hover:bg-neutral-800 w-full rounded-md px-2 py-1 transition-all ease-in-out duration-200"
    >
      <div className="rounded-md bg-neutral-700 w-10 h-10"></div>
      <div className="flex flex-col">
        <h3 className="font-medium text-neutral-100">Track name</h3>
        <p className="text-neutral-400 text-sm">artist, album</p>
      </div>
    </div>
  );
};

export default Track;
