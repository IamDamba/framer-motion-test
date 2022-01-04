// ||||||||||||||||||||||||||||| Dependances ||||||||||||||||||||||||||||||||||||

import { useState, useEffect } from "react";
import Box1 from "../components/box1/Box1";

// ||||||||||||||||||||||||||||| App Component ||||||||||||||||||||||||||||||||||||

const App = () => {
  // Hooks
  const [val, setVal] = useState();

  // Functions
  useEffect(() => {
    // Enter some content here.
  }, []);

  // Return
  return (
    <main>
      <Box1 />
    </main>
  );
};
export default App;
