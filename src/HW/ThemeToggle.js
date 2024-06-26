import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "./store";
import '../App.css'

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => {
    dispatch(toggle());
  };

  return (
    <div className={` ${theme === 'LIGHT_THEME' ? 'LIGHT_THEME' : 'DARK_THEME'}`}>
        <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ThemeToggle;