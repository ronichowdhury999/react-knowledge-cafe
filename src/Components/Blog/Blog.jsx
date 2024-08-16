import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handelAddToBookMark, handelMarkAsRead }) => {
  const { id, title, cover, author, author_img, reading_time, posted_date, hashtags } = blog;
  return (
    <div className='md:mb-20 mb-6  shadow-lg'>
      <img className='w-full mb-8 rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
      <div className='p-4'>
        <div className='flex justify-between mb-4'>
          <div className='flex'>
            <img className='w-14 rounded-full' src={author_img} alt="" />
            <div className='ml-4'>
              <h3 className='text-2xl'>{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <span>{reading_time} min read</span>
            <button onClick={() => handelAddToBookMark(blog)} className='text-2xl hover:bg-gray-600 hover:py-1 duration-
            300'><CiBookmark /></button>
          </div>
        </div>
        <h2 className='text-4xl mb-4'>{title}</h2>
        <p className='flex gap-4  duration-300'>
          {
            hashtags.map((hash, idx) => <span className='hover:text-purple-500' key={idx}><a href="">{hash}</a></span>)
          }
        </p>
        <button onClick={() => handelMarkAsRead(id, reading_time)} className={`text-purple-700 tracking-wide underline mt-3 text-xl cursor-pointer  duration-300 hover:text-white`}> Mark as read</button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelAddToBookMark: PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired
}

export default Blog;
