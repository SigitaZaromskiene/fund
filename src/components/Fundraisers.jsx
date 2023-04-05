import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";
import axios from "axios";
import Donate from "./Donate";

function Fundraisers() {
  const URL = "http://localhost:3003/projects";

  const IMG = "http://localhost:3003/img/";

  const {
    projectList,
    lastStateUpdate,
    setClientList,
    clientList,

    setLastStateUpdate,
  } = useContext(Global);

  const [raisedSum, setRaisedSum] = useState(0);

  const [donateName, setDonateName] = useState("");
  const [donateAmount, setDonateAmount] = useState("");

  const [editData, setEditData] = useState(null);

  console.log(donateAmount, donateName);

  useEffect(() => {
    if (lastStateUpdate === null) {
      return;
    }
    axios.get(URL).then((res) => {
      setClientList(res.data);
    });
  }, [lastStateUpdate]);

  // useEffect(() => {
  //   if (null === editData) {
  //     return;
  //   }
  //   axios
  //     .put(URL + "/" + editData.id, editData, { withCredentials: true })
  //     .then((res) => setLastStateUpdate(Date.now()));
  // }, [editData]);

  const howMuchLeftGoal = () => {
    const left = clientList.map((acc) => acc.amount - raisedSum);
    // console.log(left);
    //   const updatedBill = clientList.map((prj) => {
    //     if (prj.id !== clientList.id) return prj;

    //     return prj;
    //   });
  };

  // const donateHandler = (a) => {
  //   const updatedBill = clientList.map((bill) => {
  //     if (bill.id !== a.id) return bill;

  //     const newTotalAmount = Number(a.amount) + Number(donateAmount);
  //     a.amount = newTotalAmount;
  //     return bill;
  //   });

  //   setEditData({
  //     amount: a.amount,
  //     id: a.id,
  //   });

  //   setClientList(updatedBill);
  // };

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
        <div className="container">
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
              }}
            >
              <div
                style={{ height: "110px", padding: "15px", fontSize: "20px" }}
              >
                {a.text}
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ margin: "0px" }}>
                  <span style={{ fontSize: "22px", fontWeight: "500" }}>
                    1&euro;{" "}
                  </span>{" "}
                  raised of{" "}
                  <span style={{ color: "#F36B32", fontWeight: "500" }}>
                    {" "}
                    {a.amount}&euro;{" "}
                  </span>{" "}
                  goal
                </p>

                <div className="border"></div>

                <p>
                  <span style={{ color: "#297fba" }}>
                    {howMuchLeftGoal()}&euro;
                  </span>{" "}
                  left till goal
                </p>
              </div>
            </div>
            <Donate />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fundraisers;
