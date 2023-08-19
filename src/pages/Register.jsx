/* eslint-disable no-unused-vars */
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { registerUser, setAuthenticatedUser } = useContext(AuthContext);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const imageRef = useRef();
  const navigate = useNavigate();

  const getId = () => {
    const id = "UserId" + Math.random().toString(16).slice(2);
    return id;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { id: getId(), username, email, password, image };

    registerUser(user);
    setUserName("");
    setEmail("");
    setPassword("");
    setImage("");
    imageRef.current.value = "";
    navigate("/login");
    setAuthenticatedUser();
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <form className="h-96  lg:w-1/2 " onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="">username</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="px-5 py-2  border border-gray-400"
            value={username}
            type="text"
            placeholder="username"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="px-5 py-2  border border-gray-400"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">username</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="px-5 py-2  border border-gray-400"
            type="password"
            placeholder="password"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Image</label>
          <input
            className=""
            type="file"
            ref={imageRef}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <button className="bg-blue-400 w-full lg:w-24 py-2 px-5 rounded-lg text-white mt-4">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
