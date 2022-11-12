import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
import { LightTheme } from "./Shared/themes";
export const App = () =>{
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}


