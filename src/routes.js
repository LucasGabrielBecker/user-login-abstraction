import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Logged from "./pages/Logged";
import "react-toastify/dist/ReactToastify.css";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/logged">
        <Logged />
      </Route>
    </Router>
  );
}
