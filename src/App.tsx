import "./App.css";
import Playlist from "./components/Playlist/Playlist";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import { tracks } from "./mock/tracks";

function App() {
  return (
    <div className="flex flex-col items-center h-full w-full justify-evenly p-5 gap-10">
      <div className="flex w-full h-[100px] items-center justify-center">
        <h1 className="text-5xl">
          Ja<span>mm</span>ing
        </h1>
      </div>
      <div className="w-[500px]">
        <SearchBar />
      </div>
      <div className="flex gap-10 w-full h-full">
        <SearchResults />
        <Playlist tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
