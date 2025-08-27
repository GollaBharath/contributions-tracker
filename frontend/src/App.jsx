import Forks from "./components/Forks";
import "./App.css";

import { useState } from "react";

function App() {
  const [forks] = useState({ all_forks: [], num_of_forks: 0 });
  const [owner] = useState("GollaBharath");
  const [repo] = useState("Gamify");

  return (
    <div className="container">
      <div className="main-heading">GollaBharath/Gamify</div>
      <Forks forks={forks} owner={owner} repo={repo} />
    </div>
  );
}

export default App;
