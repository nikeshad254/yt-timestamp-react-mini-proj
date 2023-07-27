import React from "react";

const VideoListItem = ({video}) => {
  return (
    <li className="video-list-item">
      <img src={video.img} alt={video.title} />
      <div className="title-time">
        <span className="title">{video.title}</span>
        <span className="time">{video.time_stamp}</span>
      </div>
      <button className="btn">Select</button>
    </li>
  );
};

export default VideoListItem;
