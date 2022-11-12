import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes";
export const App = () =>{
  return (
    <BrowserRouter>
    <AppRoutes />
    </BrowserRouter>
  );
}


