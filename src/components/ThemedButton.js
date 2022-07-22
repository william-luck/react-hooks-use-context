import React, { useContext } from "react";
import { ThemeContext } from '../context/theme'

function ThemedButton({ ...props }) {

  const {theme, setTheme } = useContext(ThemeContext)

  return <button className={theme} {...props} />;
}

export default ThemedButton;
