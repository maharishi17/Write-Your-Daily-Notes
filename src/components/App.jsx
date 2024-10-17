import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Audi from "./Song";


function App() {
  const [notes, setNotes] = useState([]);
  const endOfNotesRef = useRef(null); // Reference for scrolling

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    // Scroll to the bottom when a new note is added
    endOfNotesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [notes]);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="notes-container">
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <div ref={endOfNotesRef} /> {/* Reference for scrolling */}
      </div>
        <Audi />
      <Footer />
    </div>
  );
}

export default App;
