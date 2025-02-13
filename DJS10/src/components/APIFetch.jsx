import { useState, useEffect } from "react";

const PostAPI = () => {
  const [status, setStatus] = useState();
  const [posts, setPosts] = useState([]); // Store posts in state

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched Data:", data);
          setPosts(data); // Store the fetched posts in state
          setStatus("API is working!");
        } else {
          setStatus("API is down!");
        }
      } catch (error) {
        setStatus("API request failed!");
      }
    };

    fetchPosts();
  }, []); // Runs once when the component mounts

  return (
    <div>
        <h2>API Status</h2>
        <p style={{ color: "red" }}>{status}</p>

      {posts && posts.length > 0 ?
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.id} {post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>  : 
            <p>No posts available.</p>
        }
        
    </div>
  );
};

export default PostAPI;