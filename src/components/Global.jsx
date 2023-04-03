import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);

  return (
    <Global.Provider
      value={{ route, setRoute, logged, setLogged, authName, setAuthName }}
    >
      {children}
    </Global.Provider>
  );
};
