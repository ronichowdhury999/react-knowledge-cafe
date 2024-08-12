import { useEffect } from "react";
import { useState } from "react"
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handelAddToBookMark}) => {

    const [blogs,setBlogs] =useState([]);
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])


  return (
    <div className="md:w-2/3">
       {
        blogs.map(blog => <Blog handelAddToBookMark={handelAddToBookMark} key={blog.id} blog={blog} />)
       }
    </div>
  )
}
Blogs.propTypes={
  handelAddToBookMark:PropTypes.func.isRequired
}

export default Blogs