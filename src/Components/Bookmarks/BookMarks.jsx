import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 md:ml-14 border bg-gradient-to-r from-cyan-300 to-gray-300 border-cyan-300 p-2">
      <div className='p-4 mb-10'>
        <h4 className='text-3xl'>Spent time on read : {readingTime} min</h4>
      </div>
      <h1 className="text-3xl">BookMarked Blogs: {bookMarks?.length}</h1>
      <div>
        {
          bookMarks.map((bookMark, idx) => <BookMark bookMark={bookMark} key={idx} />)
        }
      </div>
    </div>
  )
}

BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
}
export default BookMarks