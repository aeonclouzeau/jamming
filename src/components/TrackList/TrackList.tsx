import { TrackListProps } from "../../types/Track";
import Track from "../Track/Track";

const TrackList = ({ tracks, onAdd, isRemoval, onRemove }: TrackListProps) => {
  return (
    <div
      id="TrackList"
      className="flex flex-col w-full h-full md:max-h-[450px] overflow-y-auto scrollbar-thumb-neutral-800 scrollbar-track-transparent scrollbar-thumb-rounded-full scroll-smooth scrollbar-thin snap-y"
    >
      {tracks &&
        tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            isRemoval={isRemoval}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
    </div>
  );
};

export default TrackList;
