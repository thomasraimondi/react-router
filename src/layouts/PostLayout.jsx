import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import posts from "../data/posts";

export default function PostLayout() {
  return (
    <>
      <div className="relative jumbotron bg-blue-500 text-white h-30">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPr4VpQ4ltq2ola4uVcdv2x7zj7UPXK98sxRIsqH6DwS_KRV_kM6wtm6qr3eI1lw5Rcs&usqp=CAU"
          alt="Logo"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">Posts</span>
      </div>
      <div className="my-5 container mx-auto flex flex-col gap-4">
        <div className="header-page flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            <Link to="/posts">Posts</Link>
          </h2>
          <div className="search-bar flex gap-2">
            <input type="text" placeholder="Search" className="border-2 border-gray-200 rounded-md p-2" />
            <Link className="border-2 border-gray-200 rounded-md p-2" to="/posts/add-post">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
