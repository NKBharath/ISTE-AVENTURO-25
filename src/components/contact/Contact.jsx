import React, { useEffect } from "react";
import "./contact.css"; // Import the CSS file
import aventuro25 from "../../assets/aventuro25.png"; // Import the image
import particlesConfig from "../../particles-config.json"; // Import particle configuration

const Contact = () => {
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
      <div className="container4">
        <div className="ag-format-container">
          <div className="ag-courses_box">
            {[
              {
                name: "Ranjithkumar",
                role: "Chairperson",
                contact: "+91 95979 28987",
              },
              {
                name: "Srinath",
                role: "Secretary",
                contact: "+91 70107 68854",
              },
              {
                name: "Bharath",
                role: "Organizer",
                contact: "+91 80722 95598",
              },
              {
                name: "Abinaya",
                role: "Organizer",
                contact: "+91 86672 35579",
              },
              {
                name: "Paandieaswaran",
                role: "Organizer",
                contact: "+91 94452 42957",
              },
              {
                name: "Sharni",
                role: "Organizer",
                contact: "+91 77080 42415",
              },
              
              
            ].map((person, index) => (
              <div key={index} className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>
                  <div className="ag-courses-item_title">
                    {person.name}
                    <br />
                    <br />
                    <h5>{person.role}</h5>
                  </div>
                  <div className="ag-courses-item_date-box">
                    Contact:
                    <span className="ag-courses-item_date">{person.contact}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>Developed by Naveenkumar R - IT |Bharath N K - AIML | Kavin Pradheep S T - AIML </footer>
    </div>
  );
};


export default Contact;
