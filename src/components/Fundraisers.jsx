import { useState, useContext, useEffect, useCallback } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";
import axios from "axios";
import Donate from "./Donate";
import { v4 as uuidv4 } from "uuid";

function Fundraisers(props) {
  const URL = "http://localhost:3003/projects";
  const DONATION_URL = "http://localhost:3003/donations";
  const IMG = "http://localhost:3003/img/";

  const {
    projectList,
    lastStateUpdate,
    setClientList,
    clientList,
    setDonateAmount,
    donateAmount,
    leftAmount,
    donations,
    setDonations,
    setDonationsList,
    setLastStateUpdate,
    lastDonationsUpdate,
  } = useContext(Global);

  const [raisedSum, setRaisedSum] = useState(0);
  const [editData, setEditData] = useState(null);

  const [raisedAmount, setRaisedAmount] = useState("");

  const [blockUser, setBlockUser] = useState([]);

  const [userState, setUserState] = useState([]);

  //  const [createDonations, setCreateDonations] = useState([])

  useEffect(() => {
    if (lastStateUpdate === null) {
      return;
    }
    axios.get(URL).then((res) => {
      setClientList(res.data);
    });
  }, [lastStateUpdate]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put(URL + "/" + editData.id, editData, { withCredentials: true })
      .then((res) => setLastStateUpdate(Date.now()));
  }, [editData]);

  useEffect(() => {
    if (blockUser === null) {
      return;
    }
    axios
      .put(URL + "/" + blockUser.id + "/block", blockUser)
      .then((res) => setLastStateUpdate(Date.now()));
  }, [blockUser]);

  useEffect(() => {
    axios.get(DONATION_URL).then((res) => setDonationsList(res.data));
  }, [lastDonationsUpdate]);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(41, 127, 186, 0.7), rgba(0, 0, 0, 0.52))",
      }}
    >
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          color: "white",
          fontFamily: "Open Sans",
          fontSize: "32px",
        }}
      >
        {" "}
        All projects
      </h2>

      {clientList.map((a) => (
        <div key={uuidv4()} className="container">
          <div className="project">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {a.image ? (
                <img
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                  src={IMG + a.image}
                  alt="project-foto"
                />
              ) : (
                <img
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                  }}
                  src={IMG + "no-photo.jpg"}
                  alt="no-foto"
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div style={{ padding: "15px", fontSize: "12px" }}>{a.text}</div>
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: "0px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "500" }}>
                    {a.raised}&euro;{" "}
                  </span>{" "}
                  raised of{" "}
                  <span
                    style={{
                      fontSize: "20px",
                      color: "#F36B32",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    {a.amount}&euro;{" "}
                  </span>{" "}
                  goal
                </p>

                <div className="border"></div>
                {a.blocked === 0 ? (
                  <p>
                    <span style={{ color: "#297fba" }}>
                      {a.amount - a.raised}&euro;
                    </span>{" "}
                    left till goal
                  </p>
                ) : (
                  <p style={{ color: "#297fba" }}>Thank you for donations</p>
                )}
              </div>
            </div>

            <Donate
              project={a}
              raisedAmount={raisedAmount}
              setRaisedAmount={setRaisedAmount}
              setEditData={setEditData}
              setDonations={setDonations}
              donations={donations}
              blockUser={blockUser}
              setBlockUser={setBlockUser}
            />
          </div>
        </div>
      ))}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      ></div>
    </div>
  );
}

export default Fundraisers;
