import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialPost = {
  title: "",
  content: "",
  image: "",
  tags: [],
};

const initialError = {
  message: "",
  invalidFields: [],
};

export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState(initialPost);
  const [formPost, setFormPost] = useState(initialPost);
  const [error, setError] = useState(initialError);
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const handleChange = (e) => {
    setFormPost({ ...formPost, [e.target.name]: e.target.value });
  };

  const getPost = () => {
    axios
      .get(`http://127.0.0.1:3000/posts/${id}`)
      .then((res) => {
        setPost(res.data.data);
        setFormPost(res.data.data);
      })
      .catch((err) => {
        setError({ ...error, message: err.response.data.message, invalidFields: err.response.data.responseData.malformatElements });
      });
  };

  const editPost = (post) => {
    axios
      .put(`http://127.0.0.1:3000/posts/${id}`, post)
      .then((res) => {
        navigate(`/posts/${id}`);
      })
      .catch((err) => {
        setError({ ...error, message: err.response.data.message, invalidFields: err.response.data.responseData.malformatElements });
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  const handleEditPost = (e) => {
    e.preventDefault();
    editPost(formPost);
  };

  const handleAddTag = (e) => {
    setTags([...tags, tag]);
    setFormPost({ ...formPost, tags: [...formPost.tags, tag] });
    setTag("");
  };

  return (
    <>
      <div className="w-1/2 mx-auto ">
        <h1 className="text-2xl font-bold">Edit post #{id}</h1>
        <form onSubmit={handleEditPost} className="flex flex-col gap-4 mt-10">
          <label className={clsx("text-sm font-bold", error.invalidFields.includes("title") && "text-red-500")} htmlFor="title">
            Title
          </label>
          <input
            className={clsx("border-2 border-gray-200 rounded-md p-2", error.invalidFields.includes("title") && "border-red-500")}
            type="text"
            placeholder="Title"
            value={formPost.title}
            onChange={handleChange}
            name="title"
          />
          <label className={clsx("text-sm font-bold", error.invalidFields.includes("content") && "text-red-500")} htmlFor="content">
            Content
          </label>
          <input
            className={clsx("border-2 border-gray-200 rounded-md p-2 h-40", error.invalidFields.includes("content") && "border-red-500")}
            type="textarea"
            placeholder="Content"
            value={formPost.content}
            onChange={handleChange}
            name="content"
          />
          <label className={clsx("text-sm font-bold", error.invalidFields.includes("image") && "text-red-500")} htmlFor="image">
            Image
          </label>
          <input
            className={clsx("border-2 border-gray-200 rounded-md p-2", error.invalidFields.includes("image") && "border-red-500")}
            type="text"
            placeholder="Image"
            value={formPost.image}
            onChange={handleChange}
            name="image"
          />

          <label className="text-sm font-bold" htmlFor="tags">
            Tags
          </label>
          <div className="flex items-center gap-2">
            <input className="border-2 border-gray-200 rounded-md p-2 grow" type="text" placeholder="Tags" value={tag} onChange={(e) => setTag(e.target.value)} name="tags" />
            <button className="border-2 border-gray-200 rounded-md p-2" type="button" onClick={handleAddTag}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formPost.tags.map((tag) => (
              <span key={tag}>#{tag} </span>
            ))}
          </div>
          <div className="flex justify-end">
            <button className="border-2 border-gray-200 bg-blue-500 text-white rounded-md p-2" type="submit">
              Edit Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
