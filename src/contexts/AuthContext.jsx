import { createContext, useContext, useReducer, useState } from "react";

const initialState = {
  isAuthenticated: false,
  userName: "",
  // login: () => {},
  // logout: () => {},
};

// Reducer function to manage state
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, username: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, username: "" };
    default:
      return state;
  }
};

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (username) => dispatch({ type: "LOGIN", payload: username });
  const logout = () => dispatch({ type: "LOGOUT" });
  //   const [isAuthenticated, setIsAuthenticated] = useState(false);
  //   const [userName, setUserName] = useState("");

  //   const login = (name) => {
  //     setIsAuthenticated(true);
  //     setUserName(name);
  //   };
  //   const logout = () => {
  //     setIsAuthenticated(false);
  //     setUserName("");
  //   };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
