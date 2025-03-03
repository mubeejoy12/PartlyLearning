import React from "react";
import { useAuth } from "../contexts/AuthContext";

const LoginStatus = () => {
  const { isAuthenticated, username, login, logout } = useAuth();
  const [inputValue, setInputValue] = useState(""); // Store input value

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isAuthenticated ? (
        <>
          <h1>Welcome, {username}! ✅</h1>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>You are logged out ❌</h1>
          <input
            type="text"
            placeholder="Enter username"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={() => login(inputValue)}>Login</button>
        </>
      )}
    </div>
  );
};

export default LoginStatus;
