import { useCallback } from "react";
import { TrackProps } from "../../types/Track";
import Button from "../Button/Button";
import { BsPlus, BsDash } from "react-icons/bs";

const Track = ({ track, isRemoval, onAdd, onRemove }: TrackProps) => {
  const addTrack = useCallback(() => {
    if (onAdd) onAdd(track);
  }, [onAdd, track]);

  const removeTrack = useCallback(() => {
    if (onRemove) onRemove(track);
  }, [onRemove, track]);

  const renderAction = () => {
    if (isRemoval) {
      return (
        <Button onClick={removeTrack}>
          <BsDash />
        </Button>
      );
    } else {
      return (
        <Button variant="circle" onClick={addTrack}>
          <BsPlus />
        </Button>
      );
    }
  };

  return (
    <div
      id={track.id}
      className="flex items-center justify-between hover:bg-neutral-800 w-full rounded-md px-2 py-1 transition-all ease-in-out duration-200 snap-start"
    >
      <div className="flex gap-4">
        <div className="rounded-md bg-neutral-700 w-10 h-10" />
        <div className="flex flex-col">
          <h3 className="font-medium text-neutral-100">{track.name}</h3>
          <div className="flex gap-1">
            <p className="text-neutral-400 text-sm">{track.artist} |</p>
            <p className="text-neutral-400 text-sm">{track.album}</p>
          </div>
        </div>
      </div>
      {renderAction()}
    </div>
  );
};

export default Track;
