import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/thirtythree/image/upload/v1728618597/photo_5785276873213854742_y_fcrwxs.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728618597/photo_5785276873213854739_y_ovbpik.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728618612/IMG-20240706-WA0014_x3hruh.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728618600/IMG-20240706-WA0012_vvg45c.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728618598/IMG-20240628-WA0005_hxgh76.jpg",
  ];

  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          className="flex items-center"
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: `cover`,
                backgroundPosition: "center",
              }}
              className="aspect-video shrink-0 w-screen h-[400px] lg:h-[50%] object-cover"
            ></div>
          ))}
        </motion.div>

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

      <motion.div
        className="bg-blue-950 h-[30px] absolute bottom-0"
        animate={{
          width: ["0%", "100%"],
        }}
        transition={{
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default Carousel;
