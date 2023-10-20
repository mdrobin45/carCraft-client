import { createContext, useState } from "react";

export const DarkContext = createContext(null);
const ThemeContextProvider = ({ children }) => {
   const [isDark, setIsDark] = useState(false);

   return (
      <DarkContext.Provider value={{ isDark, setIsDark }}>
         {children}
      </DarkContext.Provider>
   );
};

export default ThemeContextProvider;
