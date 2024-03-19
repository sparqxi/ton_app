import React, { createContext, useContext, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeContext } from "./context/themeContext";
import { customTheme } from "./style/theme";
import { PageContext } from "./context/pageContext";
import { PagesList } from "./components/header/hader-swith";
import { PageContextProvider } from "./hooks/usePageContext";
import { PaletteMode } from "@mui/material";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
console.log('window==',window.Buffer);

const AppWrapper = () => {
  const [themeMode, setThemeMode] = useState <PaletteMode>("light");

  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    // <React.StrictMode>
      <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
        <PageContextProvider>
          <ThemeProvider theme={customTheme(themeMode)}>
            <TonConnectUIProvider manifestUrl={process.env.REACT_APP_URL +"manifest.json"}>
            <App />
            </TonConnectUIProvider>
          </ThemeProvider>
        </PageContextProvider>
      </ThemeContext.Provider>
    // </React.StrictMode>
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
