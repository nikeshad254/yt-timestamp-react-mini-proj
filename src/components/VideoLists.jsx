import React from "react";
import VideoListItem from "./VideoListItem";

const VideoLists = ({videos}) => {
  return (
    <ul className="video-list">
      {videos.map((video) => (
        <VideoListItem video={video}/>
      ))}
    </ul>
  );
};

export default VideoLists;
