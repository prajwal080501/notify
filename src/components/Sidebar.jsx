import React, {useContext} from 'react'
import { ThemeContext } from '../App';
import NoteContainer from './NoteContainer'
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sidebar = ({ notes, onDeleteNote, handleTheme, onAddNote, activeNote, setActiveNote }) => {
  const notify = () => toast("New note added successfully!");
  const notifyDelete = () => toast("Note deleted successfully!")

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified)

  const darkTheme = useContext(ThemeContext)
  return (
    <>
      <ToastContainer />
      <div className='w-[100vw] md:w-[30vw] h-screen border border-r-gray-200 overflow-y-scroll scrollbar scrollbar-hide'>
        <div className={`sidebar`}>
          
          <h2 className='text-3xl font-bold p-5'>Not<span className='text-blue-500'>ify</span></h2>
          <button className='h-fit w-fit rounded-md hover:bg-blue-500 duration-300 ease-linear p-2 bg-white border border-blue-400 hover:text-white text-black mr-4 font-light' onClick={function (event) { onAddNote(); notify(); }}>Add</button>
        </div>
        <div>
          {/* Notes */}
          <NoteContainer notifyDelete={notifyDelete} activeNote={activeNote} setActiveNote={setActiveNote} notes={notes} onDeleteNote={onDeleteNote} sortedNotes={sortedNotes} />
        </div>
      </div>
    </>
  )
}

export default Sidebar