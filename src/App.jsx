import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home"; // Import Home component
import Event from "./components/events/Events"; // Import Event component
import Event from "./components/events/Events"; // Import Home component
import particlesConfig from "./particles-config.json";
import "./App.css";
import image1 from "./assets/3d_icons.png";
import image2 from "./assets/Frame 114.png";
import bg1 from "./assets/Backgroundcutoutcircle1.png";
import bg2 from "./assets/Backgroundcutoutcircle2.png";


function MainPage() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate(); // Use navigate function for routing

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const launchDate = new Date("2025-02-28T12:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      window.particlesJS("particles-js", particlesConfig);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="particles-js"></div>
      <img alt="background stripes" src={bg2} className="backimg1" />
      <img alt="background stripes" src={bg1} className="backimg2" />

      <div className="row">
        <div className="col-sm-0 col-md-8 col-lg-6 left-split">
          <img data-aos="fade-right" alt="Squid text" src={image2} className="squid-game-head" />
          <div className="pinkblur-bg"></div>
          <div className="pinkblur-bg2"></div>

          <div className="countdown-container" data-aos="fade-right">
            <h2 className="text-white">Game Starts Soon!!!</h2>
            <div className="countdown">
              {Object.keys(timeLeft).map((interval) => (
                <div className="count" key={interval}>
                  <div className="title">
                    <h1>{timeLeft[interval]}</h1>
                  </div>
                  <p className="text-white">{interval}</p>
                </div>
              ))}
            </div>
          </div>

          <button type="button" className="register-btn" onClick={() => navigate("/home")}>
            Register Now
          </button>
        </div>

        <div className="col-sm-12 col-md-4 col-lg-6 right-split">
          <img data-aos="fade-down" className="squidgame-soldiers" alt="squid game soldiers" src={image1} />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
