import React from "react";

export default function Pads(props) {
  const playAudio = () => {
    let audioEl = document.getElementById(props.track.letter);
    props.changeDisplay(props.track.title);
    console.log(audioEl);
    audioEl.play();
  };

  return (
    <div>
      <button className="drum-pad" id={props.track.key} onClick={playAudio}>
        {props.track.letter}
        <audio
          className="clip"
          id={props.track.letter}
          src={props.track.audio}
        />
      </button>
    </div>
  );
}
