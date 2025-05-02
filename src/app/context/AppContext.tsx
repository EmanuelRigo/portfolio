"use client";

import { createContext, useState, ReactNode, useContext } from "react";
import { AppContextType } from "./context.types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [hoveredIcon, setHoveredIcon] = useState("");
  const [hoveredIcons, setHoveredIcons] = useState<string[]>([]);

  return (
    <AppContext.Provider
      value={{ hoveredIcon, setHoveredIcon, hoveredIcons, setHoveredIcons }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext debe usarse dentro de un AppProvider");
  }
  return context;
};
