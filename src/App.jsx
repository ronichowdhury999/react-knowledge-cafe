import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMark from './Components/Bookmark/BookMark'
import Header from './Components/Headers/Header'

function App() {
  
  const [bookMarks,setBookMarks]=useState([]);

  const handelAddToBookMark =blog=>{
    console.log('add to book mark');
  }
  return (
    <div>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handelAddToBookMark={handelAddToBookMark} />
        <BookMark />
      </div>
    </div>
  )
}

export default App
