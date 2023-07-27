import React from "react";
import Button from "./Button";

const VideoListItem = ({video, selectVideo, videoID}) => {
  return (
    <li className="video-list-item">
      <img src={video.img} alt={video.title} />
      <div className="title-time">
        <span className="title">{video.title}</span>
        <span className="time">You watched {video.time_stamp}</span>
      </div>
      <Button handleClick={() => selectVideo(video.id)}>{videoID === video.id? "Close": "Select"}</Button>
    </li>
  );
};

export default VideoListItem;
