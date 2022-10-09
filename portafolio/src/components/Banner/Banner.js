import React, { useRef } from "react";
import "../Banner/Banner.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Universe from "../../videos/universe.mp4";

const Banner = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const visible = { opacity: 1, y: 0, transition: { duration: 1 } };


  return (
    <div>
      <header className="header">
        <motion.div
          animate={{ opacity: [0, 1, 0]}}
          transition={{ease: "easeInOut", duration: 3, repeat: Infinity}}
          className="light-blue"
        ></motion.div>
        <motion.div animate={{ opacity: [1, 0, 1]}}
          transition={{ease: "easeInOut", duration: 3, repeat: Infinity}} className="light-violet"></motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="text-banner"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible,
            }}
          >
            Julian Garcia
          </motion.h1>
          <h2 data-aos="fade-left" data-aos-delay="30">
            Front End Developer
          </h2>

          <div className="redes-sociales">
            <a
              data-aos="fade-up"
              data-aos-delay="600"
              href="https://www.linkedin.com/in/julian-garcia-8bb751214/"
              className="linkedin"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              data-aos="fade-up"
              data-aos-delay="1000"
              href="https://www.instagram.com/julian.garcia16/"
              className="instagram"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </motion.div>
      </header>
    </div>
  );
};

export default Banner;
