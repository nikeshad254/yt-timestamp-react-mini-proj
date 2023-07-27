import React from "react";
import VideoListItem from "./VideoListItem";

const videos = [
  {
    title: "Home Run",
    img: "https://img.youtube.com/vi/Q3kaYj28oiQ/mqdefault.jpg",
    time_stamp: "20:00",
    total_time: "189839",
  },
  {
    title: "Home Runssss",
    img: "https://img.youtube.com/vi/Q3kaYj28oiQ/mqdefault.jpg",
    time_stamp: "1092",
    total_time: "039",
  },
  {
    title: "Home Runssssssssssssssss",
    img: "https://img.youtube.com/vi/Q3kaYj28oiQ/mqdefault.jpg",
    time_stamp: "0293",
    total_time: "30:00",
  },
];

const VideoLists = () => {
  return (
    <ul className="video-list">
      {videos.map((video) => (
        <VideoListItem video={video}/>
      ))}
    </ul>
  );
};

export default VideoLists;
