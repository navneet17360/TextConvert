import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("converted to Uppercase!","success")
  };
  const handleDownClick = () => {
    // console.log("lowercase was clicked" + text)

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to Lowercase!","success")
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared","success")
  };
  const handleItalicClick = () => {
    document.getElementById("myBox").style.fontStyle = "italic";
    props.showAlert("converted to Italic!","success")
  };
  const handleBoldClick = () => {
    document.getElementById("myBox").style.fontWeight = "bold";
    props.showAlert("converted to Bold!","success")
  };

  const handleRemoveSpaces = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Spaces is removed!","success")
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied!","success")
  };

  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text="newtext";  //wrong way
  //setText("new Text");
  return (
    <>
      <div className="container"
  style={{ backgroundColor: props.mode === "dark" ? "#042743" : "white", color: props.mode === "dark" ? "white" : "black" }}>
      
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="btn btn-primary mx-1 " onClick={handleUpClick}>
          Convert to Uppercase
        </div>
        <div className="btn btn-primary mx-1 " onClick={handleDownClick}>
          Convert to Lowercase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </div>
        <div className="btn btn-primary mx-1" onClick={handleItalicClick}>
          Convert To Italic
        </div>
        <div className="btn btn-primary mx-1" onClick={handleBoldClick}>
          Convert To Bold
        </div>
        <div className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>
          Remove Spaces
        </div>
        <div className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Contents
        </div>

        <div
          className="container my-3"
          style={{
            backgroundColor: props.mode === "dark" ? "dark" : "dark",
            color: props.mode === "dark" ? "white" : "black", // add this line
          }}
        >
          <h2>
            <b>Your Text Summary</b>
          </h2>
          <p>
            {text.split(" ").length} words and, {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} Minutes taken to read</p>
          <h2>
            <b>Preview</b>
          </h2>
          <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
            {text.length > 0
              ? text
              : "Enter Something in Above Textbox to preview it here"}
          </p>
        </div>
      </div>
    </>
  );
}
