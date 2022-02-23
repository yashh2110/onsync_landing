import "./App.css";
import Home from "./pages/Home";
import "react-toastify/dist/ReactToastify.css";

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Bootsplash from "./components/common/Bootsplash";

function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  });
  return (
    <div className="App">
      <Bootsplash />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
