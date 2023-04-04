function Start() {
  return (
    <div
      style={{
        height: "845px",
        backgroundImage:
          "linear-gradient(rgba(41, 127, 186, 0.7), rgba(0, 0, 0, 0.52))",
      }}
    >
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "70px",
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
              padding: "15px",
            }}
          >
            Fundraiser details
          </h4>
          <div>
            <div className="details">
              <label className="label">My story/idea</label>
              <input type="text" style={{ paddingBottom: "150px" }}></input>
            </div>
            <div className="details">
              <label className="label">Fundraiser photo</label>

              <input
                type="file"
                style={{
                  border: "1px solid black",
                  backgroundColor: "white",
                }}
              ></input>

              <div className="photo"></div>
            </div>
            <div className="details">
              <label className="label">Fundraising Goal</label>
              <input
                type="number"
                placeholder="&euro;"
                style={{
                  width: "150px",
                  height: "50px",
                  fontSize: "28px",
                }}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Start;
