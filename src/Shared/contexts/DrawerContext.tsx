import { createContext, useCallback, useContext, useState } from "react";


interface globalDrawerProps{
  children: React.ReactNode;
}

interface IDrawerContextData  {
  
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};



export const DrawerProvider: React.FC <globalDrawerProps>= ({children}) => {
  
  const [isDrawerOpen, setisDrawerOpen] = useState(false);

  const toggleDrawerOpen = useCallback(() => {
    setisDrawerOpen(oldDrawerOpen => !oldDrawerOpen );
  }, []);

  
  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
      
      {children}
        
    </DrawerContext.Provider>
  );
};