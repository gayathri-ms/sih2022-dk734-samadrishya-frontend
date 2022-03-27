import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Signin from "./components/signin";
import Signup from "./components/signup";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
