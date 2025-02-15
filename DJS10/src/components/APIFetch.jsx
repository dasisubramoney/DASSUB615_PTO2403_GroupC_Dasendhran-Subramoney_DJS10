import { useState, useEffect } from "react"; // Import React hooks

const PostAPI = () => {
  const [status, setStatus] = useState(); // State to store API status message
  const [posts, setPosts] = useState([]); // Store posts in state

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Async function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        // Fetch data from the JSONPlaceholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        // Check if the response is successful
        if (response.ok) {
          const data = await response.json(); // Convert response to JSON
          console.log("Fetched Data:", data); // Log data for debugging
          setPosts(data); // Store the fetched posts in state
          setStatus("API is working!"); // Set success status
        } else {
          setStatus("API is down!"); // Set error status if API fails
        }
      } catch (error) {
        setStatus("API request failed!"); // Handle network errors
      }
    };

    fetchPosts(); // Call the fetch function when the component mounts
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

export default PostAPI; // Export the component for use in other parts of the app