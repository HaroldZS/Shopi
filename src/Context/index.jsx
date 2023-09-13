import { createContext, useState } from "react";

export const ShopiCartContext = createContext();

export const ShopiCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ShopiCartContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </ShopiCartContext.Provider>
  );
};
