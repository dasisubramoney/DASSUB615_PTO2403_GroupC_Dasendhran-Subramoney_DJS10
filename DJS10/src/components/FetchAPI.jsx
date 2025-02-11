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
    </div>
  );
};

export default PostAPI;