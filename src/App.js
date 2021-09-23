import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
// import Home from "./components/Home";
import Services from "./components/Services";
// import About from "./components/About";
function App() {
  return (
    <>
      <Loader />
      <div className="hhh">Welcome to SatyaJit WorkSpace</div>
      <Router>
        <Navbar brand="SatyaJit" />
        <Services/>
        {/* <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/services">
          <Services/>
        </Route>
        <Route exact path = "/about">
          <About/>
        </Route>
      </Switch> */}
      </Router>
    </>
  );
}

export default App;
