import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };
  const handleLOClick = () => {
    setText(text.toLocaleLowerCase());
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };
  return (
    <>
      <div className="container">
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
        <button className="btn btn-primary mx-2" onClick={handleLOClick}>
          convert to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>Can be read in {0.008 * text.length}</p>
        <h2>Preview</h2>

        <p>{text}</p>
      </div>
    </>
  );
}
