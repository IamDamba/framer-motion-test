// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import "../../styles/components/box/box.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ||||||||||||||||||||||||||||| Box4 Component ||||||||||||||||||||||||||||||||||||

const Box4 = () => {
  // Hooks
  const [val, setVal] = useState();

  //Variables
  const boxVariable = {};

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          rotate: [0, 0, 127, 127, 0],
        }}
        transition={{
          duration: 3,
        }}
      ></motion.div>
    </div>
  );
};
export default Box4;
