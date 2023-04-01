import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");

  return (
    <Global.Provider value={{ route, setRoute }}>{children}</Global.Provider>
  );
};
