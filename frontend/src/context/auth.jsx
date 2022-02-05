import React from "react";

import STORAGE from "../constants/storage";
import useStore from "../hooks/useStore";

export const AuthContext = React.createContext([]);

const initialValue = {
  isAuth: false,
  profile: {},
};

const Provider = ({ children }) => {
  const [auth, setAuth] = useStore(STORAGE.AUTH, initialValue);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default Provider;
