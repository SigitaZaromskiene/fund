import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useReadUsers } from "./useReadUsers";
import { useWriteUsers } from "./useWriteUsers";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [goalAmount, setGoalAmount] = useState("");
  const [createData, setCreateData] = useState(null);
  const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());
  const [addStory, setAddStory] = useState("");
  const [clientList, setClientList] = useState([]);
  const [leftAmount, setLeftAmount] = useState(goalAmount);

  const [authRole, setAuthRole] = useState(null);
  const [users, setUpdateUsers] = useReadUsers();
  const [userResponse, setUserDelete] = useWriteUsers();
  const [donationsList, setDonationsList] = useState([]);
  const [lastDonationsUpdate, setLastDonationsUpdate] = useState(Date.now());

  // useEffect(() => {
  //   setLogged(null);
  // }, [route]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        logged,
        setLogged,

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
        leftAmount,
        setLeftAmount,
        authName,
        setAuthName,
        authRole,
        setAuthRole,
        users,
        setUpdateUsers,
        userResponse,
        setUserDelete,
        donationsList,
        setDonationsList,
        lastDonationsUpdate,
        setLastDonationsUpdate,
      }}
    >
      {children}
    </Global.Provider>
  );
};
