
import PropTypes from 'prop-types'

const BookMark = ({ bookMark }) => {
  return (
    <div>
      <div className='p-4'>
        <h3 className='text-xl'>{bookMark.title}</h3>
      </div>
    </div>
  )
}

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired
}

export default BookMark