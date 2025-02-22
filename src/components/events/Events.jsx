import React, { useEffect } from "react";
import aventuro25 from "../../assets/aventuro25.png";
import "./Events.css"; 
import particlesConfig from "../../particles-config.json";

const Events = () => {
  // Load particles.js dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", particlesConfig);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Particles.js Background */}
      <div id="particles-js"></div>

      {/* Navigation Bar */}
      <nav>
        <label className="logo">
          <img src={aventuro25} alt="Squid Game Logo" />
        </label>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/events">Events</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
                  onClick={() => window.open("https://forms.gle/D6o1SoXx6g6RciwA9")}
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
                  onClick={() => window.open("https://forms.gle/D6o1SoXx6g6RciwA9")}
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

        {/* Surprise Events Section */}
        <div className="section-title">🤩 Surprise Event</div>
        <div className="container">
          {[
            
            { title: "Revealing", subtitle: "Soon ..." },
            
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
                  onClick={() => (window.location.href = "")}
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
      <footer>Developed by Naveenkumar R - IT |Bharath N K - AIML | Kavin Pradheep S T - AIML </footer>
    </div>
  );
};

export default Events;
