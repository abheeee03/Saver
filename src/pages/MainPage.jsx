import React from 'react'
import CreateTask from './CreateNote'
import Sidebar from '../components/Sidebar'
import NoteCard from '../components/NoteCard'

const MainPage = () => {
  return (
    <>
    <div className="MainPage">
      <Sidebar/> 
      <div className="NoteContainer h-screen bg-zinc-800">
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
          <NoteCard/>
      </div>
    </div>
    
    </>
  )
}

export default MainPage