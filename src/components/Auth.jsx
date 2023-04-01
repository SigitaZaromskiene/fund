import { useContext, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import { Global } from "./Global";

function Auth({ children }) {
  const { setAuthName, setLogged, logged } = useContext(Global);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/login", { withCredentials: true })
  //     .then((res) => {
  //       if (res.data.status === "ok") {
  //         setLogged(true);
  //         setAuthName(res.data.name);
  //       } else {
  //         setLogged(false);
  //         setAuthName(null);
  //       }
  //     });
  // }, [setAuthName, setLogged]);

  if (logged === null) {
    return <Home></Home>;
  }
  if (logged === 1) {
    return <>{children}</>;
  }

  if (logged === 2) {
    return (
      <>
        <Login></Login>
      </>
    );
  }
}

export default Auth;
