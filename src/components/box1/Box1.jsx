// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import "../../styles/components/box1/box1.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ||||||||||||||||||||||||||||| Box1 Component ||||||||||||||||||||||||||||||||||||

const Box1 = () => {
  // Hooks
  const [isAnimate, setIsAnimate] = useState(false);

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="box-container">
      <motion.div
        className="box"
        initial={{
          x: 0,
          opacity: 0.5,
          rotate: 0,
        }}
        animate={{
          x: isAnimate ? 1000 : 0,
          opacity: isAnimate ? 1 : 0.5,
          rotate: isAnimate ? 360 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        onClick={() => setIsAnimate(!isAnimate)}
      ></motion.div>
    </div>
  );
};
export default Box1;
