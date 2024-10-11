import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Welcome = () => {
  const governors = [
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655858/governor-5_oi3l45.jpg",
      name: "PST. OGUNSEYE OLUKUNLE DAVID",
    },
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655859/governor-2_h7lmob.jpg",
      name: "PRINCESS OGUNSEYE ADEOLA",
    },
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655859/director-rescaled_ggponn.jpg",
      name: "FOLARIN MODUPE VICTORIA",
    },
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655858/governor-1_jyu935.jpg",
      name: "REV. OLADIPO",
    },
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655858/governor-4_ilm8ni.jpg",
      name: "FOLARIN TAIWO OMOTAYO",
    },
    {
      img: "https://res.cloudinary.com/thirtythree/image/upload/v1728655858/governor-3_liapk5.jpg",
      name: "IYARE JOSHUA OLUWAGBEMIGA",
    },
  ];

  const [currentGovernorIndex, setCurrentGovernorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGovernorIndex(
        (prevIndex) => (prevIndex + 1) % governors.length
      );
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [governors.length]);

  return (
    <div>
      <div className="py-5 px-5">
        <h1 className="text-lg text-center text-blue-900 font-black">
          Welcome Address
        </h1>
        <div className="bg-blue-900 h-0.5 flex justify-center items-center mt-1"></div>

        <div className="lg:flex justify-center items-center">
          <div className="flex flex-col">
            <img
              className="lg:w-[350px] h-[380px] object-cover lg:h-[400px] mt-5"
              src="https://res.cloudinary.com/thirtythree/image/upload/v1728655859/director-rescaled_ggponn.jpg"
              alt="governors"
            />

            <div className="py-3 bg-blue-900">
              <h1 className="text-center mt-1 text-white font-bold">
                FOLARIN MODUPE VICTORIA
              </h1>
              <h1 className="text-center mt-1 text-white font-bold">
                EXECUTIVE DIRECTOR, VICMOB SCHOOLS
              </h1>
            </div>
          </div>

          <div className="lg:px-5 mt-3 lg:mt-0 lg:w-1/2 text-justify">
            <p className="bg-blue-900 text-white py-5 px-5 text-xs rounded-xl cursor-pointer shadow-xl duration-300">
              <span className="text-2xl font-black">"</span>Dear Students,
              Parents, and Guardians, It is with great pride and excitement that
              we welcome you to VICMOB SCHOOLS. Our institution is more than
              just a place of learning; it's a nurturing environment where
              dreams take shape and futures are forged. VICMOB SCHOOLS is a
              comprehensive institution, encompassing preschool, primary, and
              secondary education. We hold ourselves to the highest
              international standards, ensuring that every student receives an
              education that prepares them for a life of excellence. With a rich
              history spanning over 17 years, we have grown into an educational
              institution that values the contributions of our dedicated
              educators, administrators, and the quality of the educational
              services we provide.
              <span className="text-2xl font-black">"</span>
              <br />
              <a
                href="/files/student-handbook.pdf"
                download
                className="text-blue-900 font-black"
              >
                Read more
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="md:flex justify-center mt-10 px-5 md:space-x-12 items-center">
        <div>
          <h1 className="text-lg text-center text-blue-900 font-bold">
            BOARD OF GOVERNORS
          </h1>
          <div className="relative w-full md:w-[350px] lg:w-[400px] h-[450px] flex justify-center mt-5 items-center overflow-hidden">
            {governors.map((governor, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentGovernorIndex === index ? 1 : 0 }}
                transition={{ duration: 1 }}
                style={{
                  display: currentGovernorIndex === index ? "block" : "none",
                }}
              >
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={governor.img}
                  alt={governor.name}
                />
                <h1 className="absolute bottom-0 text-center text-white bg-blue-950 w-full py-3 font-bold">
                  {governor.name}
                </h1>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center mt-10 space-y-3 lg:mt-0 items-center">
          <iframe
            className="w-[100%] mt-9"
            width="360"
            height="350"
            src="https://www.youtube.com/embed/WyrHuafejik?si=zu3BiJEGOG_84b4A"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <motion.button
            whileHover={{
              backgroundColor: "rosybrown",
            }}
            className="py-3 bg-blue-900  w-[100%] rounded-md text-white"
          >
            TAKE A TOUR
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
