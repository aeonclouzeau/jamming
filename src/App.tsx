import { useCallback, useState } from "react";
import "./App.css";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import { ITrack } from "./types/Track";
import { Spotify } from "./util/Spotify";

function App() {
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracks, setPlaylistTracks] = useState<ITrack[]>([]);
  const [searchResults, setSearchResults] = useState<ITrack[]>([]);

  const updatePlaylistName = useCallback((name: string) => {
    setPlaylistName(name);
  }, []);

  const search = useCallback((term: string) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track: ITrack) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id)) {
        return;
      }
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track: ITrack) => {
    setPlaylistTracks((prevTracks) => {
      return prevTracks.filter((currentTrack) => currentTrack.id !== track.id);
    });
  }, []);

  const savePlaylist = useCallback(() => {
    const uris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, uris)?.then(() => {
      setPlaylistName("");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div className="flex flex-col items-center h-full w-full justify-evenly p-5 gap-10">
      <div className="flex w-full h-[100px] items-center justify-center">
        <h1 className="text-5xl">
          Ja<span>mm</span>ing
        </h1>
      </div>
      <div className="w-[500px]">
        <SearchBar onSearch={search} />
      </div>
      <div className="flex gap-10 w-full h-full">
        <SearchResults tracks={searchResults} onAdd={addTrack} />
        <Playlist
          tracks={playlistTracks}
          playlistName={playlistName}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;
