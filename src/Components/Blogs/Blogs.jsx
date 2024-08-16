import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookMark,handelMarkAsRead}) => {

    const [blogs,setBlogs] =useState([]);
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


  return (
    <div className="md:w-2/3 text-white">
       {
        blogs.map(blog => <Blog 
          handelAddToBookMark={handelAddToBookMark} 
          handelMarkAsRead={handelMarkAsRead}
          key={blog.id} blog={blog} />)
       }
    </div>
  )
}
Blogs.propTypes={
  handelAddToBookMark:PropTypes.func.isRequired,
  handelMarkAsRead: PropTypes.func.isRequired
}

export default Blogs