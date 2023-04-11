import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Donate(props) {
  const [donateName, setDonateName] = useState([]);

  const [donateAmount, setDonateAmount] = useState([]);

  const {
    setClientList,
    clientList,
    authRole,
    donations,
    setDonations,
    setLastStateUpdate,
    donationsList,
    setLastDonationsUpdate,
  } = useContext(Global);

  const isUserAdmin = () => {
    return authRole === "admin";
  };

  const deleteProjectHandler = () => {
    const URL = "http://localhost:3003/projects";

    axios
      .delete(URL + "/" + props.project.id)
      .then((res) => setLastStateUpdate(Date.now()));
  };

  const createDonationHandler = () => {
    const DONATION_URL = "http://localhost:3003/donations";

    axios
      .post(DONATION_URL, {
        name: donateName,
        amount: donateAmount,
        projectId: props.project.id,
      })
      .then((res) => {
        setLastDonationsUpdate(Date.now());
        handleDonationAdded();
      });
  };

  const getProjectDonations = () => {
    return donationsList.filter(
      (donation) => Number(donation.projectId) === Number(props.project.id)
    );
  };

  //  const [donationsList, setDonationsList] = useState(
  //   JSON.parse(localStorage.getItem("list")) || []

  //     useEffect(
  //   () => localStorage.setItem("list", JSON.stringify(donationsList)),
  //   [donationsList]
  // );
  // );

  //   useEffect(() => {
  //   if (createDonations === null) {
  //     return;
  //   }
  //   axios.post(URL1, createDonations).then((res) => console.log(res.data));
  // }, [createDonations]);

  const handleDonationAdded = () => {
    const updatedBill = clientList.map((bill) => {
      if (bill.id !== props.project.id) return bill;

      const newTotalAmount =
        Number(props.project.raised) + Number(donateAmount);

      props.project.raised = newTotalAmount;

      return bill;
    });

    //      props.setCreateDonations({
    //       id: props.project.id,
    //   name: donateName,
    //   amount: donateAmount

    // })

    props.setEditData({
      raised: props.project.raised,
      id: props.project.id,
    });

    if (props.project.amount <= props.project.raised) {
      props.setBlockUser({
        id: props.project.id,
        blocked: 1,
        leftTill: 0,
      });
    }

    setClientList(updatedBill);
  };

  return (
    <>
      {props.project.blocked === 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px",
            justifyContent:'center',
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
          <button className="button-or-md"  style={{marginTop:'20px'}}onClick={createDonationHandler}>
            Donate
          </button>
        </div>
      ) : (
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
          <p
            style={{
              color: "crimson",
              backgroundColor: "white",
              padding: "15px 10px",
              fontWeight: "600",
             textAlign:'center'
            }}
          >
            Fundraiser is finished
          </p>
        </div>
      )}

      <div
        style={{
          display: "flex",
          
          alignItems:'center',
          padding: "15px",
          flexDirection:'column'
        }}
      >
       
          {isUserAdmin() ? (
            <div style={{display:'flex', flexDirection: 'column',  gap:'20px', marginTop: '35px'}}>
              <button className="button-or-md">Confirm</button>
              <button className="button-blue-md" onClick={deleteProjectHandler}>
                Delete
              </button>
            </div>
          ) : 
          <>
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
              gap: "5px",
              justifyContent: "center",
              fontSize: "16px",
              color: "#F36B32",
              flexDirection:'column'
            }}
          >
            {getProjectDonations().length ? (
              getProjectDonations().map((donation) => (
                <div key={uuidv4()} style={{display:'flex', justifyContent:'center', gap:'5px', }}>
                  
                  <div style={{ display: "flex", gap: "5px" }}>
                    <p style={{ margin: "0px" }}>{donation.name}</p>
                    <p style={{ margin: "0px" }}>{donation.amount}&euro;</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No donations yet</p>
            )}
          </div>
       
        </>}
       
      </div>
    </>
  );
}

export default Donate;
