import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({});
  const [formPost, setFormPost] = useState({
    title: "",
    content: "",
    image: "",
    tags: [],
  });

  const addPost = (post) => {
    axios.post("http://127.0.0.1:3000/posts", post).then((res) => {
      setPost(res.data.data);
    });
  };

  useEffect(() => {
    if (post.id) {
      navigate(`/posts/${post.id}`);
    }
  }, [post]);

  const handleAddPost = (e) => {
    e.preventDefault();
    addPost(formPost);
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
          type="textarea"
          placeholder="Content"
          value={formPost.content}
          onChange={(e) => setFormPost({ ...formPost, content: e.target.value })}
          required
        />
        <input
          className="border-2 border-gray-200 rounded-md p-2"
          type="text"
          placeholder="Image"
          value={formPost.image}
          onChange={(e) => setFormPost({ ...formPost, image: e.target.value })}
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
