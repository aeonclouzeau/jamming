// import React from "react";
import { ITrack } from "../../types/Track";
import Track from "../Track/Track";

const TrackList = ({ tracks }: { tracks: ITrack[] }) => {
  return (
    <div
      id="TrackList"
      className="flex flex-col w-full h-full md:max-h-[450px] overflow-y-auto"
    >
      {tracks &&
        tracks.map((track, index) => (
          <Track
            key={index}
            id={track.id}
            name={track.name}
            artist={track.artist}
            album={track.album}
          />
        ))}
    </div>
  );
};

export default TrackList;
