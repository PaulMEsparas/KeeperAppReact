import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Note } from "./Note";
// import {notes as note} from '../Notes';
import { CreateArea } from "./CreateNote";

function App() {
  const [newNote, setNewNote] = useState([]);

  function renderNote(note) {
    setNewNote((prev) => [...prev, note]);
  }

  function deleteNote(id) {
    setNewNote((prev) => prev.filter((_, index) => id !== index));
  }

  return (
    <div>
      <Header />
      <CreateArea getNote={renderNote} />
      {newNote.map((n, index) => (
        <Note
          id={index}
          key={index}
          title={n.title}
          content={n.content}
          ondelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
