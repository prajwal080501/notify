import React from 'react'
import NoteCard from './NoteCard'

const NoteContainer = ({notes,setActiveNote, sortedNotes, activeNote, onDeleteNote, notifyDelete}) => {
    return (
        <div className='space-y-4'>
            <NoteCard notifyDelete={notifyDelete} sortedNotes={sortedNotes} activeNote={activeNote} setActiveNote={setActiveNote} notes={notes} onDeleteNote={onDeleteNote}/>
        </div>
    )
}

export default NoteContainer