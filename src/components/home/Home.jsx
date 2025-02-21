import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Home.css"; // Import the external CSS file
import sg1 from "../../assets/Frame 114.png";
import sg2 from "../../assets/Frame 113.png";
import img1 from "../../assets/ISTEIMG1.png";
import img2 from "../../assets/ISTEIMG2.png";
import img3 from "../../assets/ISTEIMG3.png";
import particlesConfig from "../../particles-config.json"; // Import particle configuration

const Home = () => {
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
      {/* Particles Background */}
      <div id="particles-js"></div>

      {/* Navbar */}
      <nav>
        <label className="logo">
          <img src={sg1} alt="Squid Game Logo" />
        </label>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-container">
        <img src={sg2} alt="Squid Game Hero Image" />
      </div>

      {/* Marquee Section */}
      <div className="marquee-container">
        <h1>Glimpse Of KEC ISTE Student's Chapter</h1>
        <div className="marquee">
          <img
            src="https://app.afternoonnews.in/storage/images/5/vw1JB57HWLNSICoDTvxvucGtWFAZuidRyVfW1roL.jpg"
            alt="Image 1"
          />
          <img
            src="https://kongu.ac.in/achievements/faculty/2023_ISTE_Hariharan.jpg"
            alt="Image 2"
          />
          <img
            src="https://kongu.ac.in/source/recentupdates/SIH_2023.jpg"
            alt="Image 3"
          />
          <img
            src="https://kongu.ac.in/center_excellence/images/coe_apd.jpeg"
            alt="Image 4"
          />
          <img
            src="https://kongu.ac.in/source/recentupdates/SIH_2022.jpg"
            alt="Image 5"
          />
          <img
            src="https://kongu.ac.in/achievements/faculty/2002_mech_sathish.jpg"
            alt="Image 6"
          />
          <img
            src={img1}
            alt="Image 7"
          />
          <img
            src={img2}
            alt="Image 8"
          />
          <img
            src={img3}
            alt="Image 9"
          />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2023 Aventuro 2k25. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
