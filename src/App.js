import React, { useState } from "react";
import "./App.css";
import { tracks } from "./Tracks";
import Pads from "./Pads";
import Display from "./Display";

function App() {
  const [displayTitle, setDisplayTitle] = useState("");

  window.addEventListener("keyup", function (event) {
    const mainKeys = [
      "q",
      "Q",
      "w",
      "W",
      "e",
      "E",
      "a",
      "A",
      "s",
      "S",
      "d",
      "D",
      "z",
      "Z",
      "x",
      "X",
      "c",
      "C",
    ];
    if (mainKeys.includes(event.key)) {
      document.getElementById(event.key).click();
    }
  });

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Favorite Pet Drum Machine</h1>

        <div id="second-row">
          <div id="pad">
            {tracks.map((track) => (
              <Pads
                track={track}
                changeDisplay={(newTitle) => setDisplayTitle(newTitle)}
              />
            ))}
          </div>
          <Display value={displayTitle} />
        </div>
      </div>
    </div>
  );
}

export default App;
