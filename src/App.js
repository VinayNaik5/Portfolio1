import "./App.css";


import Bgcontext from "./context/Bgcontext";
import { useState } from "react";
import Integrate from "./Components/Integrate";

function App() {
  const bg = useState(false);
  return (
    <>
      <Bgcontext.Provider value={bg}>
        <Integrate/>
      </Bgcontext.Provider>
    </>
  );
}

export default App;
