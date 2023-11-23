import "./App.css";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import HelloUser from "./components/HelloUser";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HelloUser name="Felipejose"></HelloUser>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
