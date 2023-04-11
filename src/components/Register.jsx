import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Global } from "./Global";

function Register(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const { setRoute, setLogged, setAuthName } = useContext(Global);

  const register = (_) => {
    if (psw !== psw2) {
      setError("Passwords missmatch");
      return;
    }
    axios
      .post(
        "http://localhost:3003/register",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          setPsw2("");
          setError(null);
          setRoute("login");
        } else {
          setError("Server error");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "875px",
        backgroundImage:
          "linear-gradient(rgba(41, 127, 186, 0.7), rgba(0, 0, 0, 0.52))",
        backgroundSize: "cover",
      }}
    >
      <div className="form-login">
        <div
          style={{
            textAlign: "center",
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          {error ? (
            <span style={{ color: "red" }}>{error}</span>
          ) : (
            <>
              <h3>Register</h3>
              <div className="border"></div>
            </>
          )}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <label
              style={{
                fontSize: "16px",
                color: "#black",
                fontWeight: "500",
                width: "30%",
                marginTop: "7px",
              }}
            >
              Name
            </label>
            <input
              type="text"
              style={{ padding: "5px 10px", fontSize: "16px", width: "80%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <label
              style={{
                fontSize: "16px",
                color: "#black",
                fontWeight: "500",
                width: "30%",
                marginTop: "7px",
              }}
            >
              Password
            </label>
            <input
              type="password"
              style={{
                padding: "5px 10px",
                fontSize: "16px",

                width: "80%",
              }}
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <label
              style={{
                fontSize: "16px",
                color: "#black",
                fontWeight: "500",
                width: "30%",
                marginTop: "7px",
              }}
            >
              Repeat password
            </label>
            <input
              type="password"
              style={{
                padding: "5px 10px",
                fontSize: "16px",
                width: "80%",
                marginBottom: "40px",
              }}
              value={psw2}
              onChange={(e) => setPsw2(e.target.value)}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button className="button-blue" onClick={register}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
