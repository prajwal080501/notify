import React from 'react'
import ReactMarkdown from "react-markdown"
const Main = ({activeNote, onUpdateNote}) => {

  const onEditField = (key,value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified:Date.now(),
    });
  }

  if (!activeNote) return <div className="text-2xl flex text-blue-500 w-fit mx-auto  font-bold pt-10 text-center items-center justify-center h-screen">
    <p>No Active Note selected for preview</p>
  </div>;
  return (
    <div
      className='flex-1 h-screen'>
      <div className='h-fit w-full'>
        <form className='flex flex-col items-start space-y-4'>
          <input value={activeNote.title} onChange={(e) => onEditField("title", e.target.value)} autoFocus type="text" placeholder='Enter title for you note' className='outline-none p-4 rounded-md drop-shadow-md    w-[90%] mx-auto mt-2 text-3xl font-light bg-gray-200' />
          <textarea name="" id="" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)} className='border border-gray-200 w-[90%] h-[40vh] p-5 mx-auto rounded-md outline-none text-base bg-gray-100' placeholder='Enter text to add to this note'>{activeNote.body}</textarea>
        </form>
        <div className='bg-blue-500 flex  flex-col text-white ml-16 mt-5 p-3 w-1/2 rounded-t-md'>
        <h2 className='font-bold'>{activeNote.title} 
        </h2>
        </div>
        <div className='bg-gray-300 w-1/2  ml-16 h-fit p-5 rounded-b-md shadow-md'>
        <h3 className='mt-4 font-semibold'>Preview</h3>
        <ReactMarkdown>{activeNote.body.length > 0 ? activeNote.body : <p className='text-base font-light'>No text to preview </p> }</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Main