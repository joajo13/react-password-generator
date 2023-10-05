import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(false);

  const handleToggleTheme = () => {
    setTheme((t) => !t);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    }
    if (!theme) {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return {
    theme,
    handleToggleTheme,
  };
};
