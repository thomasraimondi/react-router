import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const initialPost = {
  title: "",
  content: "",
  image: "",
  tags: [],
};

export default function DetailPost() {
  const [post, setPost] = useState(initialPost);
  const { id } = useParams();

  const getPost = () => {
    axios.get(`http://127.0.0.1:3000/posts/${id}`).then((res) => {
      setPost(res.data.data);
    });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.content}</p>
      {post.image && <img src={post.image} alt={post.title} className="w-1/2 h-1/2" />}
      <p className="text-gray-500">{post.tags.map((tag) => tag).join(" | ")}</p>
      <p className="text-gray-500">post by: Thomas Raimondi</p>
    </>
  );
}
