import React, { useState } from "react";
import "./styles.css";

var symbolDictionary = {
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "🚭": "No Smoking",
  "🚯": "No Littering",
  "🚱": "Non-Potable Water",
  "🚷": "No Pedestrians",
  "📵": "No Mobile Phones",
  "☢️": "Radioactive",
  "☣️": "Biohazard",
  "⚠️": "Warning"
};

var emojiWeKnew = Object.keys(symbolDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = symbolDictionary[userInput];
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = symbolDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Symbol Interpreter</h1>
      <input
        placeholder="place your flag here"
        onChange={emojiInputHandler}
      ></input>
      <div onChange={emojiInputHandler}>{meaning}</div>

      <div></div>
      {emojiWeKnew.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
