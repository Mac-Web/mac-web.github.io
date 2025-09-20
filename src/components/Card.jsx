import { motion } from "framer-motion";

function Card({ name, src }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.7, type: "spring" }}
      href={`https://mac-web.github.io/${name.toLowerCase()}/`}
      className="card"
    >
      <img src={src} className="card-logo" />
      <h2 className="card-name">{name}</h2>
    </motion.a>
  );
}

export default Card;
