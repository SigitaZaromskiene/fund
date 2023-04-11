import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Global } from "./Global";

function Login(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const { setRoute, setLogged, setAuthName } = useContext(Global);

  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const login = (_) => {
    axios
      .post(
        "http://localhost:3003/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setUserName(res.data.name);
          setName("");
          setPsw("");
          setError(null);
          setLogged(1);
          setAuthName(res.data.name);
          setRoute("home");
        } else {
          setError(true);
          setUserName(null);
          setModal({
            class: "visible",
            msg: "Please enter correct details",
            color: "red",
          });
          setTimeout(() => {
            setModal({ class: "hidden", msg: "", color: "" });
          }, 2000);
          return;
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "957px",
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
            <span style={{ color: "red" }}>Login Error</span>
          ) : (
            <>
              <h3>Login</h3>
              <div className="border"></div>
            </>
          )}
        </div>

        <h5
          style={{
            textAlign: "center",
            fontSize: "20px",
            color: "#f36b32",
            marginBottom: "30px",
          }}
        >
          {!error ? <span>Hello, guest</span> : null}
        </h5>
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
              style={{ padding: "5px 10px", fontSize: "20px", width: "80%" }}
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
                fontSize: "20px",
                marginBottom: "30px",
                width: "80%",
              }}
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
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
          <button
            style={{ marginBottom: "20px" }}
            className="button-blue"
            onClick={login}
          >
            Login
          </button>
          <div style={{ display: "flex", gap: "5px" }}>
            <p style={{ fontSize: "16px" }}>Not a member yet?</p>
            <p
              style={{
                color: "black",
                cursor: "pointer",
                borderBottom: "1px solid black",
              }}
              onClick={() => setRoute("register")}
            >
              Register Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
