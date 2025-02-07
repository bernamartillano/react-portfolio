import "./App.css";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Experience />
    </div>
  );
}

export default App;
