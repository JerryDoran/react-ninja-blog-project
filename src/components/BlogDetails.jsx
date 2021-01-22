import React from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const history = useHistory();

  const handleClick = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE"
    }).then(() => {
      console.log("Post deleted");

      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.userId}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
