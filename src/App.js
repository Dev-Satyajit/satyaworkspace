import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Services from "./components/Services";
function App() {
  return (
    <>
      <Loader />
      <div className="hhh">Welcome to SatyaJit WorkSpace</div>
      <Router>
        <Navbar brand="SatyaJit" />
        <Services />
      </Router>
    </>
  );
}

export default App;
