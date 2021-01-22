import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    id: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => {
      return {
        ...prevBlog,
        [name]: value
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlog = {
      title: blog.title,
      body: blog.body,
      id: blog.userId
    };

    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newBlog)
    }).then(() => {
      console.log("new blog added");
      setIsLoading(false);
      history.push("/");
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={blog.title}
          onChange={handleChange}
          name="title"
        />
        <label>Blog body:</label>
        <textarea
          required
          name="body"
          value={blog.body}
          onChange={handleChange}
        ></textarea>
        <label>Blog author:</label>
        <select value={blog.userId} onChange={handleChange} name="id">
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  );
};

export default Create;
