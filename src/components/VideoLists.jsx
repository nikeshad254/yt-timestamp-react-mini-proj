import React from "react";
import VideoListItem from "./VideoListItem";

const VideoLists = ({videos, selectVideo, videoID}) => {
  return (
    <ul className="video-list">
      {videos.map((video) => (
        <VideoListItem key={video.id} video={video} selectVideo={selectVideo} videoID={videoID} />
      ))}
    </ul>
  );
};

export default VideoLists;
