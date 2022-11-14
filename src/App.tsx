import { BrowserRouter } from "react-router-dom";
import { AppThemeProvider } from "./Shared/contexts/Theme.context";
import { AppRoutes } from "./Routes";

export const App = () =>{
  return (
    <AppThemeProvider themeName={"light"} toggleTheme={function (): void {
      throw new Error("Function not implemented.");
    } }>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}


