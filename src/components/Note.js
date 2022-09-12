import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.ondelete(props.id)}>
        <HighlightOffIcon />
      </button>
    </div>
  );
}
