import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isCLicked, setClicked] = useState(false);

  function addNote(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="note-container">
      <form className="create-note">
        {isCLicked && (
          <input
            onChange={addNote}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={() => setClicked(true)}
          onChange={addNote}
          name="content"
          placeholder="Take a note..."
          rows={isCLicked ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isCLicked}>
          <Fab
            color={"warning"}
            onClick={(e) => {
              e.preventDefault();
              props.getNote(note);
              setNote(() => ({ title: "", content: "" }));
              setClicked(false);
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
