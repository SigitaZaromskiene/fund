import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";

import Login from "./Login";
import Auth from "./Auth";
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios";
import NavNoLogin from "./NavNoLogin";
import Register from "./Register";
import NavNoReg from "./NavNoReg";
import Fundraisers from "./Fundraisers";
import Start from "./Start";
import RoleError from "./RoleError";

function Routes(props) {
  const { route } = useContext(Global);

  const { setAuthName, setLogged, lastStateUpdate, setClientList } =
    useContext(Global);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/login", { withCredentials: true })
  //     .then((res) => {
  //       if (res.data.status === "ok") {
  //         setLogged(1);
  //         setAuthName(res.data.name);
  //       } else {
  //         setLogged(2);
  //         setAuthName(null);
  //       }
  //     })
  //     .catch((_) => {
  //       setLogged(2);
  //       setAuthName(null);
  //     });
  // }, [setAuthName, setLogged]);

  //   const { clientList, setClientList } = useContext(Global);

  //   const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());

  console.log("route", route);
  switch (route) {
    case "home":
      return (
        <Auth roles={""}>
          <Nav></Nav>
          <Home></Home>
        </Auth>
      );

    case "start":
      return (
        <Auth roles={"manager, admin"}>
          <Nav></Nav>
          <Start></Start>
        </Auth>
      );

    case "login":
      return (
        <>
          <NavNoLogin></NavNoLogin>
          <Login></Login>
        </>
      );

    // case "login":
    //   return (
    //     <Auth role={[]}>
    //       <NavNoLogin></NavNoLogin>
    //       <Login></Login>
    //     </Auth>
    //   );

    case "fundraisers":
      return (
        <>
          <Nav></Nav>
          <Fundraisers></Fundraisers>
        </>
      );

    // case "admin":
    //   return (
    //     <Auth roles={"admin"}>
    //       <Nav></Nav>
    //       <RoleError></RoleError>
    //     </Auth>
    //   );

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
