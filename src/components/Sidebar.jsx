import React from 'react'
import NoteContainer from './NoteContainer'

const Sidebar = ({ notes, onDeleteNote, onAddNote, activeNote, setActiveNote }) => {

  const sortedNotes = notes.sort((a,b) => b.lastModified -a.lastModified)
  return (
    <div className="w-[100vw] md:w-[30vw] h-screen border border-r-gray-200 overflow-y-scroll scrollbar scrollbar-hide">
      <div className='w-full sticky top-0 bg-white z-10 flex justify-between items-center '>
        <h2 className='text-3xl font-bold p-5'>Not<span className='text-blue-500'>ify</span></h2>
        <button className='h-fit w-fit rounded-md hover:bg-blue-500 duration-300 ease-linear p-2 bg-white border border-blue-400 hover:text-white text-black mr-4 font-light' onClick={onAddNote}>Add</button>

      </div>
      <div>
        {/* Notes */}
        <NoteContainer activeNote={activeNote} setActiveNote={setActiveNote} notes={notes} onDeleteNote={onDeleteNote} sortedNotes={sortedNotes}/>
      </div>
    </div>
  )
}

export default Sidebar