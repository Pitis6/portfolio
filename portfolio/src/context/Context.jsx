import React from "react";
import { useState } from "react";

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {


  const [proyectIndex, setProyectIndex] = useState(0);

  const updateProyectIndex = (index) => {
    setProyectIndex(index);
  };
  

  const contextValue = {
    proyectIndex,
    updateProyectIndex
  }
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
