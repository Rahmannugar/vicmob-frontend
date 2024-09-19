import "./App.css";
import Admission from "./components/Admission";
import Carousel from "./components/Carousel";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import Schools from "./components/Schools";
import Welcome from "./components/Welcome";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Carousel />
      <Admission />
      <Welcome />
      <Schools />
      <Events />
    </div>
  );
};
export default App;
