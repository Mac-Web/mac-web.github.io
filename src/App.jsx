import { motion } from "framer-motion";
import { macvg, maclearn, macideas, mactools, macblog, youtube, email, github, discord } from "./assets/assets";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Section from "./components/Section";

function App() {
  return (
    <>
      <NavBar />
      <motion.div initial={{ y: 150, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, type: "spring" }}>
        <div className="hero">
          <h1 className="hero-title">Welcome to MacWeb!</h1>
          <p className="hero-description">Select an app below to get started.</p>
          <div className="cards">
            <Card name="MacVG" src={macvg} />
            <Card name="MacLearn" src={maclearn} />
            <Card name="MacIdeas" src={macideas} />
            <Card name="MacTools" src={mactools} />
            <Card name="MacBlog" src={macblog} />
          </div>
        </div>
        <Section
          title="What is MacWeb?"
          description="MacWeb is a collection of a wide variety of different powerful web apps and platforms that help you improve, make you more productive, and provide you with top-tier entertainment experiences! We develop all kinds of online apps with extremely high quality with many features aimed to improve your experience of the internet! See more information about our apps (MacVG, MacLearn, MacIdeas, MacTools, and MacBlog) below!"
          app="macweb"
          color="#11288F"
          img="/logo.png"
        />
        <Section
          title="MacVG, the best online gaming platform"
          description="MacVG is the best game site built for your entertainment with more than 400 diverse games that you can choose from. With a crazy amount of features and content, MacVG makes it easy to browse, play, and enjoy different games! The games are all optimized to be as fast and smooth as possible, and you can customize the platform however you like, tailored to your prefrences!"
          app="macvg"
          color="#E28B08"
          img={macvg}
          odd={true}
        />
        <Section
          title="MacLearn, the web development learning platform"
          description="Learn, strengthen, and master. Read coding tutorials on MacLearn, learn web development tips, try them in Code Playground, and create anything. In the 21st century, coding is one of the most important skills to learn and master. Learn to code now, at MacLearn. Use the platform to its fullest by saving articles, do practice quizzes, and try to collect all the achievements!"
          app="maclearn"
          color="#2949AE"
          img={maclearn}
        />
        <Section
          title="MacIdeas, the ultimate productivity tool"
          description="MacIdeas is the ultimate productivity tool for capturing and writing down your ideas, thoughts, and anything! With the integration of tasks, notes, drawings, and more, you can manage your imagination and thoughts easily! Unfortunately, MacIdea's development is currently paused, but we'll resume development and keep improving it in the future!"
          app="macideas"
          color="#007F7E"
          img={macideas}
          odd={true}
        />
        <Section
          title="MacTools, the extensive utilities library"
          description="MacTools is your all in one utility app that helps you get anything done easily with powerful tools, features, and widgets ranging from math and geometry to text decoder, timer, countdown, and more! You can also pin these tools to access them instantly! Unfortunately, MacTools's development is currently paused, but we'll resume development and keep improving it in the future!"
          app="mactools"
          color="#0F6E10"
          img={mactools}
        />
        <Section
          title="MacBlog, the up to date information hub"
          description="MacBlog is the information hub for MacWeb apps, where we put and share our ideas, updates, and articles about our apps, projects, and more! You can see posts, tips, info, and other resources about our apps here if you want to learn more about them. Note that unlike our other projects, MacBlog isn't an app, it's just an information/support center for all our other apps."
          app="macblog"
          color="#491E87"
          img={macblog}
          odd={true}
        />
        <footer className="footer">
          <div className="footer-column">
            <a href="" className="footer-logo">
              <img src="/logo.png" /> MacWeb
            </a>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()}{" "}
              <a href="https://mac-web.github.io" target="_blank">
                MacWeb
              </a>
            </div>
            <div className="footer-copy">All rights reserved</div>
            <div className="footer-copy">
              Made with ❤️ by{" "}
              <a href="https://github.com/tonymac129/" target="_blank">
                Tony Macaroni
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Browse Tabs</h2>
            <a href="" className="footer-link">
              Home
            </a>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">MacWeb Information</h2>
            <a href="https://mac-web.github.io/macblog/#/apps/macweb" className="footer-link" target="_blank">
              About
            </a>
            <a href="https://mac-web.github.io/macblog/#/apps/macweb/updates" className="footer-link" target="_blank">
              Updates
            </a>
            <a href="https://forms.gle/iacBWZAYAizBsfyt9" className="footer-link" target="_blank">
              Feedback
            </a>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">MacWeb Apps</h2>
            <a href="https://mac-web.github.io/macvg/" className="footer-link" target="_blank">
              MacVG
            </a>
            <a href="https://mac-web.github.io/maclearn/" className="footer-link" target="_blank">
              MacLearn
            </a>
            <a href="https://mac-web.github.io/macideas/" className="footer-link" target="_blank">
              MacIdeas
            </a>
            <a href="https://mac-web.github.io/mactools/" className="footer-link" target="_blank">
              MacTools
            </a>
            <a href="https://mac-web.github.io/macblog/" className="footer-link" target="_blank">
              MacBlog
            </a>
          </div>
          <div className="footer-column">
            <h2 className="footer-title">Social</h2>
            <div className="footer-social">
              <a href="mailto:mac.web.company@gmail.com" target="_blank" className="footer-icon" title="Email us">
                <img src={email} />
              </a>
              <a href="https://www.youtube.com/@Mac-Web" target="_blank" className="footer-icon" title="YouTube">
                <img src={youtube} />
              </a>
              <a href="https://github.com/Mac-Web/mac-web.github.io" target="_blank" className="footer-icon" title="Source code">
                <img src={github} />
              </a>
              <a href="https://discord.gg/UT7g2S2cBP" target="_blank" className="footer-icon" title="Join our server!">
                <img src={discord} />
              </a>
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default App;
