import React from "react";
import "./Moon.css";
import { motion } from "framer-motion";

const Moon = () => {
  return (
    <motion.div className="moon">
      <motion.div
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      ></motion.div>
    </motion.div>
  );
};

export default Moon;
