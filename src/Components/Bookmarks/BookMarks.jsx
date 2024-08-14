import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({ bookMarks,readingTime }) => {
  return (

    <div className="md:w-1/3 ml-14">
      <div className='p-4 mb-10'>
      <h4 className='text-3xl'>Spent time on read : {readingTime} min</h4>
      </div>
      <h1 className="text-3xl">BookMarked Blogs: {bookMarks?.length}</h1>
      <div>
        {
          bookMarks.map((bookMark,idx) => <BookMark bookMark={bookMark} key={idx} />)
        }
      </div>
    </div>
  )
}

BookMarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime :PropTypes.number.isRequired
}
export default BookMarks