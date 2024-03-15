import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context/themeContext";
import { theme } from "./style/theme";
import { PageContext } from "./context/pageContext";
import { PagesList } from "./components/header/hader-swith";
import { PageContextProvider } from "./hooks/usePageContext";

const AppWrapper = () => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const customTheme = useMemo(() => {
    const temp = {
      ...theme,
      palette: {
        ...theme.palette,
        mode: themeMode,
      },
    };
    return temp;
  }, [theme, themeMode]);

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <PageContextProvider>
          <ThemeProvider theme={customTheme}>
            <App />
          </ThemeProvider>
        </PageContextProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<AppWrapper />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
