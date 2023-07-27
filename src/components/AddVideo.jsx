import React from "react";
import Button from "./Button";

const AddVideo = () => {
  return (
    <form className="add-video-form">
      <div className="inp-lbl">
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" />
      </div>

      <div className="inp-lbl">
        <label htmlFor="link">Link: </label>
        <input type="text" name="link" />
      </div>

      <Button>Add Now</Button>
    </form>
  );
};

export default AddVideo;
