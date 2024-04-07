import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./components/Home/index";
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Home" element={<Home />}/>
      <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;