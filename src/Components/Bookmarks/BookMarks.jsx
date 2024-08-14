import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({ bookMarks,readingTime }) => {
  return (

    <div className="md:w-1/3 ml-14">
      <div className='p-4 mb-10'>
      <h3 className='text-3xl'>Spent time on read : <span className='bg-red-600'>{readingTime}</span> min</h3>
      </div>
      <h1 className="text-3xl">BookMarked Blogs: {bookMarks?.length}</h1>
      <div>
        {
          bookMarks.map(bookMark => <BookMark bookMark={bookMark} key={bookMark.id} />)
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