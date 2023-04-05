import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import { useFile } from "./useFile";

function Donate(props) {
  const [donateName, setDonateName] = useState([]);

  const [donateAmount, setDonateAmount] = useState([]);

  const { setClientList, clientList } = useContext(Global);

  const donateHandler = () => {
    const updatedBill = clientList.map((bill) => {
      if (bill.id !== props.project.id) return bill;

      const newTotalAmount =
        Number(props.project.raised) + Number(donateAmount);
      props.project.raised = newTotalAmount;

      return bill;
    });

    console.log(updatedBill);

    props.setEditData({
      raised: props.project.raised,
      id: props.project.id,
      donatorName: donateName,
      donatorAmount: donateAmount,
    });

    setClientList(updatedBill);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          onChange={(e) => setDonateName(e.target.value)}
          placeholder="Name"
          style={{ padding: "10px", fontSize: "14px" }}
        />
        <input
          onChange={(e) => setDonateAmount(e.target.value)}
          placeholder="Amount"
          style={{ padding: "10px", fontSize: "14px" }}
        />
        <button className="button-or-sm" onClick={donateHandler}>
          Donate
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "20px",
              textAlign: "center",
              color: "#297fba",
              marginBottom: "10px",
              fontWeight: "500",
            }}
          >
            Recent donations &#10084;
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              fontSize: "16px",
              color: "#F36B32",
            }}
          >
            {donateName ? (
              <>
                <p style={{ margin: "0px" }}>&#10084;</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <p style={{ margin: "0px" }}>{props.project.donatorName}</p>
                  <p style={{ margin: "0px" }}>
                    {props.project.donatorAmount}&euro;
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
