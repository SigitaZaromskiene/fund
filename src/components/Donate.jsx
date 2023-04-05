import { useState, useContext, useEffect } from "react";

function Donate() {
  const [donateName, setDonateName] = useState("");
  const [donateAmount, setDonateAmount] = useState("");
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
        <button className="button-or-sm">Donate</button>
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
            <p style={{ margin: "0px" }}>&#10084;</p>
            <div style={{ display: "flex", gap: "5px" }}>
              <p style={{ margin: "0px" }}>Lara</p>
              <p style={{ margin: "0px" }}>100 &euro;</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              fontSize: "16px",
              color: "#F36B32",
            }}
          >
            <p style={{ margin: "0px" }}>&#10084;</p>
            <div style={{ display: "flex", gap: "5px" }}>
              <p style={{ margin: "0px" }}>Lara</p>
              <p style={{ margin: "0px" }}>100 &euro;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
