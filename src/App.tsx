import { ThemeProvider } from "styled-components"
import { RouteApp } from "./routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import {colorPalettes} from "./styles/theme"
import React, { useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState(colorPalettes[0]);

  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTheme = colorPalettes.find((theme) => theme.name === e.target.value);
    if (selectedTheme) {
      setCurrentTheme(selectedTheme);
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <select onChange={handleChangeTheme}>
        {colorPalettes.map((theme) => (
          <option key={theme.name} value={theme.name}>
            {theme.name}
          </option>
        ))}
      </select>
      <RouteApp />
    </ThemeProvider>
  );
}


export default App
