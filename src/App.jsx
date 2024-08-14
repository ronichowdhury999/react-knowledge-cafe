import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Headers/Header'
import BookMarks from './Components/Bookmarks/BookMarks'


function App() {

  const [bookMarks, setBookMarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handelAddToBookMark = blog => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  }

  const handelMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    const removeBookMark = bookMarks.filter(bookMark => bookMark.id !== id);
    setBookMarks(removeBookMark);
  }

  return (
    <div>
      <Header />
      <div className='md:flex max-w-7xl mx-auto px-4 mt-4 md:px-4 lg:px-0'>
        <Blogs
          handelAddToBookMark={handelAddToBookMark}
          handelMarkAsRead={handelMarkAsRead}
          readingTime={readingTime}
        />
        <BookMarks
          bookMarks={bookMarks}
          readingTime={readingTime}
        />
      </div>
    </div>
  )
}
export default App
