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
      </Router>
    </>
  );
}

export default App;
