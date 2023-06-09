import { useContext } from "react";
import { Global } from "./Global";
import axios from "axios";

function NavAdmin(props) {
  const { route, setRoute, authName, setAuthName, setLogged, logged } =
    useContext(Global);

  const logOut = (_) => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        setLogged(false);
        setAuthName(false);
        setRoute("home");
      });
  };
  return (
    <div className="navigation">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          justifyContent: "center",
        }}
      >
        <h3 style={{ color: "#161616", margin: "0px" }}>
          invest<span style={{ color: "#297FBA" }}>IN</span>me
        </h3>
        <p className="nav-a" onClick={() => setRoute("home")}>
          Home
        </p>

        <p className="nav-a" onClick={() => setRoute("admin")}>
          Admin
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {authName ? (
          <>
            <h4>Admin {authName}</h4>
            <p className="button-or" onClick={logOut}>
              Logout
            </p>
          </>
        ) : (
          <>
            <p className="button-or" onClick={() => setRoute("register")}>
              Register
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default NavAdmin;
