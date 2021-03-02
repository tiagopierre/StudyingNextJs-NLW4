import { Children, createContext, ReactNode, useState } from "react";

interface HeaderContextData {
  pageActive: string;
  navigationHome: () => void;
  navigationLeaderboard: () => void;
}

interface HeaderProviderProps {
  children: ReactNode;
}

export const HeaderContext = createContext({} as HeaderContextData);

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [pageActive, setPageActive] = useState("Home");

  function navigationHome() {
    setPageActive("Home");
  }

  function navigationLeaderboard() {
    setPageActive("Leaderboard");
  }
  return (
    <HeaderContext.Provider
      value={{ pageActive, navigationHome, navigationLeaderboard }}
    >
      {children}
    </HeaderContext.Provider>
  );
}
