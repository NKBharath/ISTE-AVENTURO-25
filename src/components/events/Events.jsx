import React, { useEffect } from "react";
import "./App.css"; // Import the CSS file (if you want to keep styles separate)

const Events = () => {
  // Load particles.js dynamically
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

  // Particles.js configuration
  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#E84181",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div>
      {/* Particles.js Background */}
      <div id="particles-js"></div>

      {/* Navigation Bar */}
      <nav>
        <label className="logo">
          <img src="Frame 114.png" alt="Squid Game Logo" />
        </label>
        <ul>
          <li>
            <a href="home.html">Home</a>
          </li>
          <li>
            <a href="events.html">Events</a>
          </li>
          <li>
            <a href="timeline.html">Timeline</a>
          </li>
          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="box">
        {/* Tech Events Section */}
        <div className="section-title">Tech Events</div>
        <div className="container">
          {[
            { title: "Paper", subtitle: "Presentation" },
            { title: "Coding", subtitle: "Contest" },
            { title: "Tech", subtitle: "Quiz" },
          ].map((event, index) => (
            <div className="outer" key={index}>
              <div className="dot"></div>
              <div className="card1">
                <div className="ray"></div>
                <div className="text">{event.title}</div>
                <h5>{event.subtitle}</h5>
                <br />
                <button
                  className="custom-btn"
                  onClick={() => (window.location.href = "https://www.example.com")}
                >
                  Register
                </button>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Non-Tech Events Section */}
        <div className="section-title">Non-Tech Events</div>
        <div className="container">
          {[
            { title: "Squid", subtitle: "Game" },
            { title: "IPL", subtitle: "Auction" },
            { title: "Treasure", subtitle: "Hunt" },
          ].map((event, index) => (
            <div className="outer" key={index}>
              <div className="dot"></div>
              <div className="card1">
                <div className="ray"></div>
                <div className="text">{event.title}</div>
                <h5>{event.subtitle}</h5>
                <br />
                <button
                  className="custom-btn1"
                  onClick={() => (window.location.href = "https://www.example.com")}
                >
                  Register
                </button>
                <div className="line topl"></div>
                <div className="line leftl"></div>
                <div className="line bottoml"></div>
                <div className="line rightl"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer>Developed by Naveenkumar R - IT</footer>
    </div>
  );
};

export default Events;
