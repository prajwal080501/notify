import React from 'react'
import NoteCard from './NoteCard'

const NoteContainer = ({notes,setActiveNote, sortedNotes, activeNote, onDeleteNote}) => {
    return (
        <div className='space-y-4'>
            <NoteCard sortedNotes={sortedNotes} activeNote={activeNote} setActiveNote={setActiveNote} notes={notes} onDeleteNote={onDeleteNote}/>
        </div>
    )
}

export default NoteContainer