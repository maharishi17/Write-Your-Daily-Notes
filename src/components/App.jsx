import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Song from "./Song"; // Ensure this imports the audio component correctly

function App() {
  const [notes, setNotes] = useState([]);
  const endOfNotesRef = useRef(null); // Reference for scrolling

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  useEffect(() => {
    endOfNotesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
        <div ref={endOfNotesRef} />
      </div>
      <Song /> {/* Render your audio component here */}
      <Footer />
    </div>
  );
}

export default App;
