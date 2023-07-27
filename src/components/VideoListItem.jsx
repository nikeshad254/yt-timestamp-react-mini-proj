import React from "react";
import Button from "./Button";

const VideoListItem = ({video}) => {
  return (
    <li className="video-list-item">
      <img src={video.img} alt={video.title} />
      <div className="title-time">
        <span className="title">{video.title}</span>
        <span className="time">{video.time_stamp}</span>
      </div>
      <Button>Select</Button>
    </li>
  );
};

export default VideoListItem;
