import React, { useState } from "react";

export function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function addNote(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  }

  // function submitNote(e){
  //   e.preventDefault();
  //   props.note();
  // };

  return (
    <div>
      <form>
        <input
          onChange={addNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={addNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button
          onClick={(e) => {
            props.getNote(note);
            setNote(() => ({ title: "", content: "" }));
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}
