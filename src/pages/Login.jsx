/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    checkLogin,
    currentUser,
    users,
    isAuthenticate,
    setAuthenticatedUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    checkLogin(email, password);

    if (users.find((u) => u.email === email && u.password === password)) {
      navigate("/");
    } else {
      setAuthenticatedUser();
      setIsError(true);
    }
  };
  return (
    <div className="flex h-screen justify-center items-center">
      <form className=" h-96   lg:w-1/2 " onSubmit={handleSubmit}>
        <div
          className={` ${
            isError ? "block" : "hidden"
          } bg-red-400 text-white text-2xl`}
        >
          Invaid email or password
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-2  border border-gray-400"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="px-5 py-2  border border-gray-400"
            type="password"
            placeholder="password"
          />
        </div>

        <button className="bg-blue-400 w-full lg:w-24  py-2 px-5 rounded-lg text-white mt-4">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
