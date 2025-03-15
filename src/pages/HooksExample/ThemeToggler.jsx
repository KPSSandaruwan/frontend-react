import React, {useContext} from 'react';
import {ThemeContext} from '../../utils/themeContext';

export default function ThemeToggler() {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        marginTop: "10px",
        padding: "10px",
        background: theme === "light" ? "#333" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        border: "none",
        cursor: "pointer",
      }}
    >
      Toggle Theme
    </button>
  );
}