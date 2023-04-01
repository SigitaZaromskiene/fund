import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
// import LoggedInBills from "./LoggedInBills";
// import Login from "./Login";
// import Auth from "./Auth";
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios";

function Routes(props) {
  const { route } = useContext(Global);

  //   const { setAuthName, setLogged } = useContext(Global);

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:3003/login", { withCredentials: true })
  //       .then((res) => {
  //         if (res.data.status === "ok") {
  //           setLogged(1);
  //           setAuthName(res.data.name);
  //         } else {
  //           setLogged(2);
  //           setAuthName(null);
  //         }
  //       })
  //       .catch((_) => {
  //         setLogged(2);
  //         setAuthName(null);
  //       });
  //   }, [setAuthName, setLogged]);

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
    default:
      return null;
  }

  //     case "bills":
  //       return (
  //         <Auth>
  //           <Nav class="nav" btn="hover"></Nav>
  //           <LoggedInBills></LoggedInBills>
  //         </Auth>
  //       );

  //     case "login":
  //       return <Login btn={props.className}></Login>;
  //     // case "register":
  //     //   return <Register btn={props.className}></Register>;
  //     default:
  //       return null;
  //   }
  // }
}

export default Routes;
