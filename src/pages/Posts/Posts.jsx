import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderPost from "../../components/Post/HeaderPost";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    axios.get("http://127.0.0.1:3000/posts").then((res) => {
      setPosts(res.data.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <HeaderPost />
      <section className="flex flex-wrap gap-4 w-full">
        {posts.map((post) => (
          <div className="card w-1/4 border-2 border-gray-200 rounded-md shadow-md grow" key={post.id}>
            <div className="card-header flex justify-between items-center border-b border-gray-200 p-4">
              <h5 className="card-title">{post.title}</h5>
              <div className="n-post-number px-2 py-1 bg-green-300 rounded-md">
                <span> #{post.id}</span>
              </div>
            </div>
            <div className="card-body">
              <p className="card-text p-4">{post.content}</p>
            </div>
            <div className="card-footer p-4 border-t border-gray-200 flex justify-between items-center">
              <button className="btn btn-primary">post by: Thomas</button>
              <Link to={`/posts/${post.id}`}>
                <button className="border-2 border-gray-200 rounded-md p-2 bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer">View</button>
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
