import { useState } from "react";
import "./App.css";
import Forks from "./components/Forks";
import ContriList from "./components/ContriList";
import StarsBlock from "./components/StarsBlock";

function App() {
  const [owner, setOwner] = useState("GollaBharath");
  const [repo, setRepo] = useState("Gamify");
  const [showInput, setShowInput] = useState(false);
  const [inputOwner, setInputOwner] = useState(owner);
  const [inputRepo, setInputRepo] = useState(repo);

  const handleButtonClick = () => setShowInput(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    setOwner(inputOwner);
    setRepo(inputRepo);
    setShowInput(false);
  };

  return (
    <div className="container">
      <div className="main-heading-row">
        <span className="main-heading">
          {owner}/{repo}
        </span>
        <button className="edit-btn" onClick={handleButtonClick}>
          Edit
        </button>
        {showInput && (
          <form className="edit-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputOwner}
              onChange={(e) => setInputOwner(e.target.value)}
              placeholder="Owner"
              className="edit-input"
            />
            <input
              type="text"
              value={inputRepo}
              onChange={(e) => setInputRepo(e.target.value)}
              placeholder="Repo"
              className="edit-input"
            />
            <button type="submit" className="edit-submit">
              Go
            </button>
          </form>
        )}
      </div>
      <div className="blocks-row">
        <Forks owner={owner} repo={repo} />
        <ContriList owner={owner} repo={repo} />
        <StarsBlock owner={owner} repo={repo} />
      </div>
    </div>
  );
}

export default App;
