// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

// ||||||||||||||||||||||||||||| Box5 Component ||||||||||||||||||||||||||||||||||||

const Box5 = () => {
  // Hooks
  const [isAnimate, setIsAnimate] = useState(false);
  const control = useAnimation();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <div className="box-container">
      <button
        onClick={() => {
          control.start({
            x: 0,
            transition: { duration: 2 },
          });
        }}
      >
        Move Left
      </button>
      <button
        onClick={() => {
          control.start({
            x: 1000,
            transition: { duration: 2 },
          });
        }}
      >
        Move Right
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "50%",
            transition: { duration: 1 },
          });
        }}
      >
        Circle
      </button>
      <button
        onClick={() => {
          control.start({
            borderRadius: "0%",
            transition: { duration: 1 },
          });
        }}
      >
        Square
      </button>
      <button
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};
export default Box5;
