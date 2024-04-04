'use client'
import React, { createContext, useContext, useState } from "react";

interface HomeContextType {
  isEditorVisible: boolean;
  toggleVisibility: () => void;
}

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditorVisible, setIsEditorVisible] = useState(true);

  function toggleVisibility() {
    setIsEditorVisible((prev) => !prev);
  }

  return (
    <HomeContext.Provider value={{ isEditorVisible, toggleVisibility }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHome = (): HomeContextType => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};
