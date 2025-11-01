import "./App.css";
import Home from "./components/pages/Home/Home";
import Landing from "./components/pages/Landing/Landing";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "./components/pages/SignUp/SignUp";
import Player from "./components/pages/Player/Player";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        toast("Logged in");
        navigate("/home");
      } else {
        navigate("/signup");
      }
    });
  }, []);

  return (
    <>
       <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
}

export default App;
