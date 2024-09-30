import React from "react";
import "./mainComponent.index.css";
import Button from "../../Common/Button/button.index";
import cryptoiphone from "../../../assets/cip.webp";
import cryptoiphonebk from "../../../assets/bk.jpg";
import { motion } from "framer-motion";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-compnente">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="track-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-app"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay:2}}
        >
          The main motive behind this project is to give information about
          current as well as up
        </motion.p>
        <motion.p
          className="info-apps"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          to one year past crypto market and provide a simple user-friendly
        </motion.p>
        <motion.div className="button-flex"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay:3}}
        >
          <Button text={"Dashboard"} />
          <Button text={"Shere"} outline={true} />
        </motion.div>
      </div>

      <motion.div className="phone-right-compnente">
        <motion.img src={cryptoiphone} className="gif-img" 
        initial={{y: -15}}
      animate={{y: 15}}
      transition={{
        type: "smoth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }}
        />
        <img src={cryptoiphonebk} className="black-img" />
      </motion.div>
    </div>
  );
}

export default MainComponent;
