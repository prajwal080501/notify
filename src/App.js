import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { createContext, useEffect, useState } from "react";
import uuid from "react-uuid"

export const ThemeContext = createContext();
function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    const initalValue = JSON.parse(saved)
    return initalValue || [];
  });
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // Functions

  const handleTheme = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme)
  }

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: 'Untitled Note',
      body: '',
      lastModified: Date.now(),
    }

    setNotes([newNote, ...notes])
  }

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }

      return note;
    })

    setNotes(updatedNotesArray)
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className='flex flex-col md:flex-row'>
        <Sidebar handleTheme={handleTheme} activeNote={activeNote} setActiveNote={setActiveNote} onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} />
        <Main onUpdateNote={onUpdateNote} activeNote={getActiveNote()} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
