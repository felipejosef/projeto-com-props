import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
