import "./App.css";
import Admission from "./components/Admission";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Carousel />
      <Admission />
    </div>
  );
};
export default App;
