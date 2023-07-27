import AddVideo from "./components/AddVideo";
import Button from "./components/Button";
import Stampper from "./components/Stampper";
import VideoLists from "./components/VideoLists";

function App() {
  return (
    <div className="App">
      <div className="lists-add">
        <h3>Video Time Stamp</h3>
        <VideoLists />

        <Button>Add Video</Button>

        <AddVideo />
      </div>

      <Stampper />

    </div>
  );
}

export default App;
