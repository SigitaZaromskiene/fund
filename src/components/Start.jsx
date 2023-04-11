import { useState, useContext, useEffect } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";
import axios from "axios";

function Start() {
  const URL = "http://localhost:3003/story";

  const [file, readFile, remImage] = useFile();

  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const {
    goalAmount,
    setGoalAmount,
    createData,
    setCreateData,
    setLastStateUpdate,
    addStory,
    setAddStory,
    raisedAmount,
  } = useContext(Global);

  useEffect(() => {
    if (createData === null) {
      return;
    }

    axios.post(URL, createData).then((res) => setLastStateUpdate(Date.now()));
    setCreateData(null);
  }, [createData, setLastStateUpdate, setCreateData]);

  const formHandler = () => {
    if (!goalAmount || !addStory) {
      setModal({
        class: "visible",
        msg: "Please fill all fields",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
      return;
    }

    setCreateData({
      text: addStory,
      file,
      amount: goalAmount,
      raised: 0,
      leftTill: goalAmount,
      blocked: 0,
    });

    setModal({
      class: "visible",
      msg: "The fundraiser was sucessful created",
      color: "white",
    });
    setTimeout(() => {
      setModal({ class: "hidden", msg: "", color: "" });
    }, 2000);

    setAddStory("");
    setGoalAmount("");
    remImage();
  };

  return (
    <div
      style={{
        height: "875px",
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
        Easily create a{" "}
        <span style={{ color: "black", marginLeft: "8px", marginRight: "8px" }}>
          fundraiser
        </span>{" "}
        for a project you{" "}
        <span
          style={{ color: "#f36b32", marginLeft: "8px", marginRight: "8px" }}
        >
          believe
        </span>{" "}
        in
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          marginBottom: "40px",
        }}
      >
        <form>
          <h4
            style={{
              textAlign: "center",
            }}
          >
            Fundraiser details
          </h4>

          <div className="details">
            <label className="label">My story/project</label>
            <input
              type="text"
              value={addStory}
              style={{ paddingBottom: "150px" }}
              onChange={(e) => setAddStory(e.target.value)}
            ></input>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="details">
              <label
                className="label"
                htmlFor="formFile"
                style={{ marginBottom: "0px" }}
              >
                Fundraiser photo
              </label>
              <div
                style={{ display: "flex", gap: "70px", alignItems: "center" }}
              >
                <input
                  type="file"
                  id="formFile"
                  style={{
                    border: "1px solid black",
                    backgroundColor: "white",

                    height: "45px",
                    padding: "6px",
                  }}
                  onChange={readFile}
                ></input>
                {file ? (
                  <img className="photo" src={file} alt="addphoto" />
                ) : (
                  <div className="photo"></div>
                )}
              </div>
            </div>
            <div className="details">
              <label className="label">Fundraising Goal</label>
              <input
                type="number"
                placeholder="&euro;"
                min="0"
                value={goalAmount}
                style={{
                  width: "150px",
                  height: "45px",
                  fontSize: "28px",
                }}
                onChange={(e) => setGoalAmount(e.target.value)}
              ></input>
            </div>
            <button type="button" className="button-or" onClick={formHandler}>
              Submit
            </button>
          </div>
        </form>
        <div className={`${modal.class} modal`}>
          <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
        </div>
      </div>
    </div>
  );
}

export default Start;
