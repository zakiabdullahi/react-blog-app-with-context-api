import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const { isAuthenticate, currentUser, logout } = useContext(AuthContext);
  return (
    <div className="h-16  fixed top-0 left-0 right-0 bg-white bg-opacity-90  border-b border-gray-200 pt-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center">
          <a href="" className="text-gray-700">
            Blog
          </a>
          <ul className="flex items-center space-x-4 text-gray-700">
            <Link to="/" href="#">
              Home
            </Link>
            <Link to="/post" href="#">
              Post
            </Link>
            <Link to="/new">{isAuthenticate ? "CreatePost" : ""}</Link>

            <Link to="/login"> Login</Link>
            <Link to="/register"> Register</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
