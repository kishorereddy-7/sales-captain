import "./App.css";
import { Navigater } from "./components/Navigation/Navigation";
import Home from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Navigater />
    </div>
  );
}

export default App;
