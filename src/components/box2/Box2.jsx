// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import "../../styles/components/box/box.scss";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// ||||||||||||||||||||||||||||| Box2 Component ||||||||||||||||||||||||||||||||||||

const Box2 = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
};
export default Box2;
