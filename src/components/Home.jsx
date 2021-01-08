import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "My new website",
      body: "blah blah blah...",
      author: "mario"
    },
    {
      id: 2,
      title: "Welcome Party",
      body: "blah blah blah...",
      author: "mario"
    },
    {
      id: 3,
      title: "Web Dev Tips",
      body: "blah blah blah...",
      author: "yoshi"
    }
  ]);

  const [name, setName] = useState("mario");

  const deleteBlog = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect ran");
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={deleteBlog} />
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
        handleDelete={deleteBlog}
      /> */}
      <button onClick={() => setName("yoshi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
