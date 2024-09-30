"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const allPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
      setPosts(response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message); // Safe access to error.message
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    allPosts();
  }, []);

  return (
    <div>
      <h1>About Us Page</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {/* {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default AboutUs;
