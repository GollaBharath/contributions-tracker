import "./App.css";
import Header from "./components/Header";
import ContriList from "./components/ContriList";
import Pfp from "/image.png";

function App() {
  return (
    <>
      <Header />
      <ContriList />
      <img src={Pfp} alt="Profile" />
    </>
  );
}

export default App;
