import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMark from './Components/Bookmarks/BookMarks'
import Header from './Components/Headers/Header'


function App() {

  const [bookMarks, setBookMarks] = useState([]);

  const handelAddToBookMark = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }
  return (
    <div>
      <Header />
      <div className='md:flex max-w-7xl mx-auto px-4 md:px-4 lg:px-0'>
        <Blogs handelAddToBookMark={handelAddToBookMark} />
        <BookMark bookMarks={bookMarks} />
      </div>
    </div>
  )
}
export default App
