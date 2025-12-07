import { createContext, useState } from "react";

export const NameContext = createContext();

const NameContexProvider = ({ children }) => {
  const [name, setName] = useState("Nabinur");

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContexProvider;
