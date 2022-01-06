// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||
import "../../styles/components/box/box.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ||||||||||||||||||||||||||||| Box3 Component ||||||||||||||||||||||||||||||||||||

const Box3 = () => {
  // Hooks
  const [val, setVal] = useState();

  // Variables
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren", 
        staggerChildren: 0.6,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3].map((box) => (
          <motion.li className="boxItem" variants={listVariant}></motion.li>
        ))}
      </motion.div>
    </div>
  );
};
export default Box3;
