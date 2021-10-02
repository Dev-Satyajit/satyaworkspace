import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Home from "./components/Home";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Loader />
      <div className="hhh">Welcome to SatyaJit WorkSpace</div>
      <Router>
        <Navbar brand="SatyaJit" />
        <Switch>
        <Route exact path="/satyaworkspace">
        <Home />
        </Route>
        <Route exact path="/satyaworkspace/services">
        <Services />
        </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
