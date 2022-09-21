import React from 'react'
// onClick={() => setActiveNote(note.id)} className={`${note.id === activeNote ? "note-active" : "note"}`}
const NoteCard = ({ notes,activeNote,setActiveNote, onDeleteNote, sortedNotes }) => {

    return (
        <div>
            {sortedNotes.map((note) => (
                <div className={`${note.id === activeNote ? "note-active" : "note"}`} onClick={() => setActiveNote(note.id)}>
                    <p className='text-right text-red-400 hover:text-black duration-200 ease-linear' onClick={() => onDeleteNote(note.id)}>Delete</p>
                    <h2 className='text-2xl font-bold text-black text-left'>{note.title}</h2>
                    <p>{note.body && note.body.substr(0, 100) + '...'}</p>
                    <p className='q-full text-gray-400 text-sm'>Last Modified: {new Date(note.lastModified).toLocaleDateString("en-US", {hour: "2-digit",minute:"2-digit"})}</p>
                </div>
            ))}

        </div>
    )
}

export default NoteCard