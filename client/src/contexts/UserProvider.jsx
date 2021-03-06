import React, { useState, useEffect, createContext } from "react";

const context = createContext({ user: null });

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const login = () => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch((err) => console.error(err));
  };

  const logout = () => {
    fetch("http://localhost:5000/auth/logout")
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch((err) => console.error(err));
  };
  const value = { userData, login, logout };

  return <context.Provider value={value}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
