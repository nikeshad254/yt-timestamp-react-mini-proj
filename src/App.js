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
      total_time: "23:23",
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [videoID, setVideoId] = useState(null);

  function handleToggleAddForm() {
    console.log("called");
    setShowAddForm((s) => !s);
    setVideoId(null);
  }

  function selectVideo(id) {
    setVideoId((cId) => (cId === id ? null : id));
    setShowAddForm(false);
  }

  function hanldeAddVideo(title, img) {
    if (!title || !img) {
      console.log("not found");
      return;
    }

    const id = crypto.randomUUID();
    const newVideo = {
      id,
      title,
      img,
      time_stamp: "00:00",
      total_time: "00:00",
    };

    console.log(newVideo);
    setVideos((v) => [...v, newVideo]);
    setShowAddForm(false);
  }

  function updateData(data) {
    setVideos((videos) =>
      videos.map((video) =>
        video.id === data.id
          ? {
              ...video,
              time_stamp: data.time_stamp,
              total_time: data.total_time,
            }
          : video
      )
    );
  }
  return (
    <div className="App">
      <div className="lists-add">
        <h3>Video Time Stamp</h3>
        <VideoLists
          videos={videos}
          selectVideo={selectVideo}
          videoID={videoID}
        />
        {showAddForm && <AddVideo onAddVideo={hanldeAddVideo} />}

        <Button handleClick={handleToggleAddForm}>
          {showAddForm ? "Close" : "Add Video"}
        </Button>
      </div>

      {videoID && (
        <Stampper
          video={videos.filter((item) => item.id === videoID)[0]}
          updateData={updateData}
        />
      )}
    </div>
  );
}

export default App;
