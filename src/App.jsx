import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { GlobalProvider } from "./components/Global";
import Routes from "./components/Routes";

function App() {
  return (
    <GlobalProvider>
      <Routes></Routes>
    </GlobalProvider>
  );
}

export default App;
