import { motion } from "framer-motion";

function Section({ title, description, app, color, img, odd = false }) {
  const phrases = [
    "Take me there",
    "Check it out",
    "Go there",
    "Let me try",
    "Try now",
    "Let me see",
    "Sounds cool",
    "Interesting",
  ];

  return (
    <motion.div
      className="section"
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 200, opacity: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true }}
    >
      {!odd && <img src={img} className="section-img" />}
      <div className="section-info">
        <h2 className="section-title">{title}</h2>
        <p className="section-description">{description}</p>
        <div className="section-btns">
          {app != "macweb" && (
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.7, type: "spring" }}
              href={`https://mac-web.github.io/${app}/`}
              className="section-btn action"
              style={{ borderColor: color, backgroundColor: color }}
            >
              {phrases[Math.floor(Math.random() * phrases.length)]}
            </motion.a>
          )}
          <motion.a
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.7, type: "spring" }}
            href={`https://mac-web.github.io/macblog/#/apps/${app}/`}
            className="section-btn"
            target="_blank"
            style={{ borderColor: color }}
          >
            More info
          </motion.a>
        </div>
      </div>
      {odd && <img src={img} className="section-img" />}
    </motion.div>
  );
}

export default Section;
