import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3 ml-8">
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
  bookMarks: PropTypes.array.isRequired
}
export default BookMarks