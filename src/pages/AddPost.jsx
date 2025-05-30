import { useState } from "react";
import originalPosts from "../data/posts";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(originalPosts);
  const [formPost, setFormPost] = useState({
    title: "",
    content: "",
  });

  const handleAddPost = (e) => {
    e.preventDefault();
    const newPost = { ...formPost, id: posts.length + 1 };
    console.log(newPost);
    setPosts([...posts, newPost]);
    navigate("/posts");
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Add new post</h1>
      <form onSubmit={handleAddPost} className="flex flex-col gap-4">
        <input
          className="border-2 border-gray-200 rounded-md p-2"
          type="text"
          placeholder="Title"
          value={formPost.title}
          onChange={(e) => setFormPost({ ...formPost, title: e.target.value })}
          required
        />
        <input
          className="border-2 border-gray-200 rounded-md p-2"
          type="text"
          placeholder="Content"
          value={formPost.content}
          onChange={(e) => setFormPost({ ...formPost, content: e.target.value })}
          required
        />
        <div className="flex justify-end">
          <button className="border-2 border-gray-200 bg-blue-500 text-white rounded-md p-2" type="submit">
            Add Post
          </button>
        </div>
      </form>
    </>
  );
}
