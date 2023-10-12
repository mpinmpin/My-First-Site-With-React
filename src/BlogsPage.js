// import { useEffect, useState } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const BlogsPage = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  
  
    return (
      <div>
        {error && <div>{ error }</div> }
        {isPending && <div>Page is Loading...</div>}
        {blogs && <Bloglist blogs={blogs} title = 'All your blogs'/>} 
      </div>
    );
  }
   
  export default BlogsPage;
  
  