import { useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typewriter from "typewriter-effect";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476547/vicmob-2_lb2uy9.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726529414/vicmob-3_bjoejg.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div
          className="flex md:hidden transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              className="h-[500px] object-cover w-screen"
              src={img}
              alt={`Carousel-${index + 1}`}
            />
          ))}
        </div>

        <img
          className="h-[600px] hidden md:block object-cover w-screen"
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg"
          alt="Carousel-1"
        />

        {/* sliders */}
        <div className="md:hidden">
          <div
            className="bg-white p-2 rounded-full absolute bottom-40 z-20 left-2 cursor-pointer"
            onClick={handlePrev}
          >
            <ChevronLeftIcon />
          </div>
          <div
            className="bg-white p-2 rounded-full absolute bottom-40 z-20 right-2 cursor-pointer"
            onClick={handleNext}
          >
            <ChevronRightIcon />
          </div>
        </div>

        <div className="absolute z-10 top-28 left-[3%]">
          <h1 className=" font-black text-lg bg-white p-3 w-[30vw] min-w-[200px]">
            Vicmob Schools
          </h1>
          <p className="bg-blue-950 text-sm font-bold text-white w-[30vw] min-w-[200px] p-3">
            <Typewriter
              options={{
                strings: [
                  "Building children to become EXCELLENT in all facets of life.",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
