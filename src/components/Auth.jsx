import { useContext, useEffect } from "react";
import axios from "axios";
import Home from "./Home";
import Login from "./Login";
import { Global } from "./Global";
import RoleError from "./RoleError";

function Auth({ children, roles }) {
  const { setAuthRole, setAuthName, logged, setLogged, route, setUpdateUsers } =
    useContext(Global);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/login", { withCredentials: true })
  //     .then((res) => {
  //       if (res.data.status === "ok") {
  //         setAuthName(res.data.name);
  //         setAuthRole(res.data.role);
  //         if (roles) {
  //           if (roles.split(",").includes(res.data.role)) {
  //             setLogged(1);
  //             if (route === "start") {
  //               setUpdate(Date.now());
  //             } else if (route === "fundraisers") {
  //               setUpdateUsers(Date.now());
  //             }
  //           } else {
  //             setLogged(3);
  //           }
  //         } else {
  //           setLogged(1);
  //         }
  //       } else {
  //         setAuthName(null);
  //         setAuthRole(null);
  //         if (roles.length) {
  //           setLogged(2);
  //         } else {
  //           setLogged(1);
  //         }
  //       }
  //     });
  // }, [
  //   roles,
  //   route,
  //   setUpdate,
  //   setUpdateUsers,
  //   setLogged,
  //   setAuthName,
  //   setAuthRole,
  // ]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "ok") {
          setAuthName(res.data.name);
          setAuthRole(res.data.role);
          if (roles) {
            if (roles.split(",").includes(res.data.role)) {
              setLogged(1);
              if (route === "fundraisers") {
                setUpdateUsers(Date.now());
              }
            }
          } else {
            setLogged(1);
          }
        } else {
          setAuthName(null);
          setAuthRole(null);
          if (roles.length) {
            setLogged(2);
          } else {
            setLogged(1);
          }
        }
      });
  }, [roles, route, setUpdateUsers, setLogged, setAuthName, setAuthRole]);

  if (!logged || 1 === logged) {
    return <>{children}</>;
  }
  if (2 === logged) {
    return <Login />;
  }
}

export default Auth;
