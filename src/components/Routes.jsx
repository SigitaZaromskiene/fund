import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
import Story from "./Story";
import Login from "./Login";
import Auth from "./Auth";
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios";
import NavNoLogin from "./NavNoLogin";
import Register from "./Register";
import NavNoReg from "./NavNoReg";
import Fundraisers from "./Fundraisers";

function Routes(props) {
  const { route } = useContext(Global);

  const { setAuthName, setLogged } = useContext(Global);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "ok") {
          setLogged(1);
          setAuthName(res.data.name);
        } else {
          setLogged(2);
          setAuthName(null);
        }
      })
      .catch((_) => {
        setLogged(2);
        setAuthName(null);
      });
  }, [setAuthName, setLogged]);

  //   const { clientList, setClientList } = useContext(Global);

  //   const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());

  switch (route) {
    case "home":
      return (
        <>
          <Nav></Nav>
          <Home />
        </>
      );

    case "stories":
      return (
        <Auth>
          <Nav></Nav>
          <Story></Story>
        </Auth>
      );

    case "login":
      return (
        <>
          <NavNoLogin></NavNoLogin>
          <Login></Login>
        </>
      );

    case "fundraisers":
      return (
        <>
          <Nav></Nav>
          <Fundraisers></Fundraisers>
        </>
      );
    case "register":
      return (
        <>
          <NavNoReg></NavNoReg>
          <Register></Register>
        </>
      );
    default:
      return null;
  }
}

export default Routes;
