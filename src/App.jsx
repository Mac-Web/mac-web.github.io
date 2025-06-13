import { motion } from "framer-motion";
import { macvg, maclearn, macideas, mactools, macblog } from "./assets/assets";
import NavBar from "./components/NavBar";
import Card from "./components/Card";

function App() {
  return (
    <>
      <NavBar />
      <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: "spring" }}>
        <div className="hero">
          <h1 className="hero-title">Welcome to MacWeb!</h1>
          <p className="hero-description">Select an app below to get started.</p>
        </div>
        <div className="cards">
          <Card name="MacVG" src={macvg} />
          <Card name="MacLearn" src={maclearn} />
          <Card name="MacIdeas" src={macideas} />
          <Card name="MacTools" src={mactools} />
          <Card name="MacBlog" src={macblog} />
        </div>
      </motion.div>
    </>
  );
}

export default App;
