import React from "react";
import PostCreate from "./screens/PostCreate";
import PostList from "./screens/PostList";

function App() {
  return (
    <div className="container">
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
