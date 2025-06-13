import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mode, github } from "../assets/assets";

function NavBar() {
  const [lightMode, setLightMode] = useState(localStorage.getItem("mode") ? JSON.parse(localStorage.getItem("mode")) : false);

  useEffect(() => {
    lightMode ? document.body.classList.add("light") : document.body.classList.remove("light");
    localStorage.setItem("mode", lightMode);
  }, [lightMode]);

  return (
    <nav className="nav">
      <a to="/" className="nav-logo">
        <img src="/logo.png" /> MacWeb
      </a>
      <div className="nav-links">
        <a href="https://mac-web.github.io/macvg/" className="nav-link">
          MacVG
        </a>
        <a href="https://mac-web.github.io/maclearn/" className="nav-link">
          MacLearn
        </a>
        <a href="https://mac-web.github.io/macideas/" className="nav-link">
          MacIdeas
        </a>
        <a href="https://mac-web.github.io/mactools/" className="nav-link">
          MacTools
        </a>
        <a href="https://mac-web.github.io/macblog/" className="nav-link">
          MacBlog
        </a>
        <motion.img
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 1.1, rotate: 320 }}
          transition={{ duration: 0.7, type: "spring" }}
          src={mode}
          title="Toggle light mode"
          className="nav-img"
          onClick={() => setLightMode(!lightMode)}
        />{" "}
        <motion.img
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 1.1, rotate: 320 }}
          transition={{ duration: 0.7, type: "spring" }}
          src={github}
          title="Source code"
          className="nav-img"
          onClick={() => window.open("https://github.com/Mac-Web/mac-web.github.io", "_blank")}
        />
      </div>
    </nav>
  );
}

export default NavBar;
