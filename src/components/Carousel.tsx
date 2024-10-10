import Typewriter from "typewriter-effect";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const Carousel = () => {
  const images = [
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726476547/vicmob-2_lb2uy9.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1726529414/vicmob-3_bjoejg.jpg",
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="relative">
        <div className="flex items-center cursor-grab active:cursor-grabbing">
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: `cover`,
                backgroundPosition: "center",
              }}
              className="aspect-video h-screen w-screen"
            ></div>
          ))}
        </div>

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
