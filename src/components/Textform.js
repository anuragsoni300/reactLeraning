import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="1"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        convert to upper case
      </button>
    </div>
  );
}
