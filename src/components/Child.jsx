import React, { useContext } from "react";
import ThemeContext, { useTheme } from "../contexts/ThemeContext";

const Child = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#fff" : "#333",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>current Theme is : {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Child;
