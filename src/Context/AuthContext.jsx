/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { authReducer, initialState } from "../Reducers/authReducer";
import { createContext } from "react";

export const AuthContext = createContext(initialState);
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const registerUser = (user) => {
    const newUser = state.users.concat(user);

    dispatch({
      type: "REGISTER",
      payload: { user: newUser },
    });
  };
  const isAuthenticatedUser = () => {
    dispatch({
      type: "ISAUTHENTICATED",
      payload: true,
    });
  };
  const checkLogin = (email, password) => {
    const isAuth = state.users.find(
      (user) => user.email === email && user.password === password
    );

    if (isAuth) {
      isAuthenticatedUser();

      dispatch({
        type: "LOGIN",
        payload: isAuth,
      });
    }
  };

  const setAuthenticatedUser = () => {
    dispatch({
      type: "ISAUTHENTICATED",
      payload: false,
    });
  };

  const values = {
    users: state.users,
    isAuthenticate: state.isAuthenticated,
    currentUser: state.currentUser,
    registerUser,
    checkLogin,
    setAuthenticatedUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
