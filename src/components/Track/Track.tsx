// import React from "react";
import { ITrack } from "../../types/Track";

const Track = ({ id, name, artist, album }: ITrack) => {
  return (
    <div
      id={id}
      className="flex items-center gap-4 hover:bg-neutral-800 w-full rounded-md px-2 py-1 transition-all ease-in-out duration-200"
    >
      <div className="rounded-md bg-neutral-700 w-10 h-10"></div>
      <div className="flex flex-col">
        <h3 className="font-medium text-neutral-100">{name}</h3>
        <div className="flex gap-1">
          <p className="text-neutral-400 text-sm">{artist} |</p>
          <p className="text-neutral-400 text-sm">{album}</p>
        </div>
      </div>
    </div>
  );
};

export default Track;
