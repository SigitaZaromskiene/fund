import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [goalAmount, setGoalAmount] = useState("");
  const [createData, setCreateData] = useState("");
  const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());
  const [addStory, setAddStory] = useState("");
  const [clientList, setClientList] = useState([]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        logged,
        setLogged,
        authName,
        setAuthName,
        goalAmount,
        setGoalAmount,
        createData,
        setCreateData,
        lastStateUpdate,
        setLastStateUpdate,
        addStory,
        setAddStory,
        clientList,
        setClientList,
      }}
    >
      {children}
    </Global.Provider>
  );
};
