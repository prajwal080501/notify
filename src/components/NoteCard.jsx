import React, { useContext } from 'react'
import { ThemeContext } from '../App';
import {motion} from "framer-motion"
// onClick={() => setActiveNote(note.id)} className={`${note.id === activeNote ? "note-active" : "note"}`}
const NoteCard = ({ notes, activeNote, setActiveNote, onDeleteNote, sortedNotes, notifyDelete }) => {

    const darkTheme = useContext(ThemeContext)
    return (
        <div>
            {sortedNotes.map((note) => (
                <motion.div
                initial={{opacity:0, y:-100}}
                whileInView={{opacity:1, y:0}}
                transition={{duation:1.5}}
                 className={`${note.id === activeNote && darkTheme ? "note-active" : "note"}`} onClick={function (event) { setActiveNote(note.id); notifyDelete(); }}>
                    <p className='text-right text-red-400 hover:text-black duration-200 ease-linear' onClick={() => onDeleteNote(note.id)}>Delete</p>
                    <h2 className='text-2xl font-bold text-black text-left'>{note.title}</h2>
                    <p>{note.body && note.body.substr(0, 100) + '...'}</p>
                    <p className='q-full text-gray-400 text-sm'>Last Modified: {new Date(note.lastModified).toLocaleDateString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>
                </motion.div>
            ))}

        </div>
    )
}

export default NoteCard