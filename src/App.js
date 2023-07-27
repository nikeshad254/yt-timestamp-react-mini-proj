import { useState } from "react";
import AddVideo from "./components/AddVideo";
import Button from "./components/Button";
import Stampper from "./components/Stampper";
import VideoLists from "./components/VideoLists";

function App() {

  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Home Run",
      img: "https://img.youtube.com/vi/Q3kaYj28oiQ/mqdefault.jpg",
      time_stamp: "20:00",
      total_time: "189839",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false)
  const [videoID, setVideoId] = useState(null)

  function handleToggleAddForm(){
    console.log("called")
    setShowAddForm(s => !s)
  }

  function selectVideo(id){
    setVideoId(cId => cId === id? null: id)
  }

  function hanldeAddVideo(title, img){
    if(!title || !img){
      console.log("not found")
      return
    }

    const id = crypto.randomUUID()
    const newVideo = {
      id,
      title,
      img,
      time_stamp: "00",
      total_time: "000"
    }

    console.log(newVideo)
    setVideos(v => [...v, newVideo])
    setShowAddForm(false)
    
  }

  return (
    <div className="App">
      <div className="lists-add">
        <h3>Video Time Stamp</h3>
        <VideoLists videos={videos} selectVideo={selectVideo} videoID={videoID} />
        {showAddForm && <AddVideo onAddVideo={hanldeAddVideo}/>}

        <Button handleClick={handleToggleAddForm} >{showAddForm ? "Close": "Add Video"}</Button>
      </div>

      {videoID && <Stampper />}

    </div>
  );
}

export default App;
