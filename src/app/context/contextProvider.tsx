"use client";

import { AppProvider } from "./AppContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <AppProvider>{children}</AppProvider>;
};

export default ContextProvider;
