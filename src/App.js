import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { useEffect, useState } from "react";
import uuid from "react-uuid"
function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.notes))
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])
  

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
    if(note.id === activeNote){
      return updatedNote;
    }

    return note;
  })

  setNotes(updatedNotesArray)
}
  return (
    <div className='flex flex-col md:flex-row'>
      <Sidebar activeNote={activeNote} setActiveNote={setActiveNote} onAddNote={onAddNote} onDeleteNote={onDeleteNote} notes={notes} />
      <Main onUpdateNote={onUpdateNote} activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
