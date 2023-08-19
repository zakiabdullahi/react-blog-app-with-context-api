import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Post from "./pages/Post.jsx";
import Edit from "./pages/Edit.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { PostProvider } from "./Context/PostContext.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import { CommentProvider } from "./Context/CommentContext.jsx";
import EditComment from "./pages/EditComment.jsx";

const rooterProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/post/:id/",
        element: <PostDetails />,
      },
      {
        path: "/edit/:id/",
        element: <Edit />,
      },
      {
        path: "/comment/edit/:id/",
        element: <EditComment />,
      },
      {
        path: "/new",
        element: <CreatePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PostProvider>
        <CommentProvider>
          <RouterProvider router={rooterProvider}>
            <App />
          </RouterProvider>
        </CommentProvider>
      </PostProvider>
    </AuthProvider>
  </React.StrictMode>
);
