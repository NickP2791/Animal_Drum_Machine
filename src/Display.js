import React from "react";

export default function Display(props) {
  return (
    <div id="display">
      <h2>Control panel</h2>
      <h3>{props.value}</h3>
    </div>
  );
}
