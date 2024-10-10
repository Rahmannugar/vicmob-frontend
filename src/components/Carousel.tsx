import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476547/vicmob-2_lb2uy9.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726529414/vicmob-3_bjoejg.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex md:hidden"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 4 }}
        >
          {images.map((img, index) => (
            <motion.img
              whileHover={{ scale: 2 }}
              drag
              key={index}
              className="h-[500px] object-cover w-screen"
              src={img}
              alt={`Carousel-${index + 1}`}
            />
          ))}
        </motion.div>

        <motion.img
          className="h-[600px] hidden md:block object-cover w-screen"
          src={images[currentIndex]}
          alt={`Carousel-${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          drag
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="absolute z-10 top-28 left-[3%]">
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
