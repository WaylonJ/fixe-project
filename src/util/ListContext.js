import React, { createContext, useContext, useState } from "react";

export const ListContext = createContext();

// Custom hook to use the context
export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
};

// Provider component
export const ListProvider = ({ children }) => {
  const [listData, setListData] = useState([]);

  return (
    <ListContext.Provider value={{ listData, setListData }}>
      {children}
    </ListContext.Provider>
  );
};
