import { useState } from "react";
import AddVideo from "./components/AddVideo";
import Button from "./components/Button";
import Stampper from "./components/Stampper";
import VideoLists from "./components/VideoLists";

function App() {

  const [videos, setVideos] = useState([
    {
      title: "Home Run",
      img: "https://img.youtube.com/vi/Q3kaYj28oiQ/mqdefault.jpg",
      time_stamp: "20:00",
      total_time: "189839",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false)

  function handleToggleAddForm(){
    console.log("called")
    setShowAddForm(s => !s)
  }

  function hanldeAddVideo(title, img){
    if(!title || !img){
      console.log("not found")
      return
    }

    const newVideo = {
      title,
      img,
      time_stamp: "00",
      total_time: "000"
    }

    console.log(newVideo)
    setVideos(v => [...v, newVideo])
  }

  return (
    <div className="App">
      <div className="lists-add">
        <h3>Video Time Stamp</h3>
        <VideoLists videos={videos} />
        {showAddForm && <AddVideo onAddVideo={hanldeAddVideo} />}

        <Button handleClick={handleToggleAddForm} >{showAddForm ? "Close": "Add Video"}</Button>
      </div>

      <Stampper />

    </div>
  );
}

export default App;
