import { Sidebar } from "@/components/sidebar";
import { MainView } from "@/components/main-view";
import { MediaPlayer } from "@/components/media-player";
import  { NowPlaying } from "@/components/now-playing";

function App() {
  return (
    <div className="w-full grid grid-rows-[1fr_90px]">
      <div className="w-full h-[calc(100vh_-_90px)] grid grid-cols-[260px_1fr_300px] justify-center">
        <Sidebar />
        <MainView />
        <NowPlaying />
      </div>
      <MediaPlayer />
    </div>
  );
}

export default App;
