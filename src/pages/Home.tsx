import Admission from "../components/Admission";
import Carousel from "../components/Carousel";
import Events from "../components/Events";
import Newsletter from "../components/Newsletter";
import Schools from "../components/Schools";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Admission />
      <Welcome />
      <Schools />
      <Events />
      <Newsletter />
    </div>
  );
};
export default Home;
