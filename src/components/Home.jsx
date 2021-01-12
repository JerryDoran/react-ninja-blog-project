import React, { useState } from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  // use custom hook
  const { data: blogs, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  // const deleteBlog = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
        handleDelete={deleteBlog}
      /> */}
    </div>
  );
};

export default Home;
