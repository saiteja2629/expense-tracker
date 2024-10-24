import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    expenses: [],
    userName: "",
    toast: { message: "", isError: false },
    isToastOpen: false,
  });

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};
