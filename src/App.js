import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from './components/Navbar';
import "./App.css";

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/home"><Home /></Route>
      <Route exact path="/login"><Login /></Route>
    </Router>
    </>
  );
}

export default App;
