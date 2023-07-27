import React, { useState } from "react";
import Button from "./Button";

const AddVideo = ({onAddVideo}) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  function cleanLink(str) {
    const reg = /https:\/\/www.youtube.com\/watch\?v=|https:\/\/youtu.be\//g;
    let newStr = str.replace(reg, "https://img.youtube.com/vi/");
    newStr += '/mqdefault.jpg'
    return newStr;
  }

  function handleSubmit(e) {
    e.preventDefault()
    const cleanedLink = cleanLink(link)
    onAddVideo(title, cleanedLink)
    setTitle("")
    setLink("")
  }

  return (
    <form className="add-video-form" onSubmit={handleSubmit}>
      <div className="inp-lbl">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="inp-lbl">
        <label htmlFor="link">Link: </label>
        <input
          type="text"
          name="link"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>

      <Button>Add Now</Button>
    </form>
  );
};

export default AddVideo;
