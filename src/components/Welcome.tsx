import { motion } from "framer-motion";

const Welcome = () => {
  const governors = [
    "https://res.cloudinary.com/thirtythree/image/upload/v1728655858/governor-5_oi3l45.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728655859/governor-2_h7lmob.jpg",
    "https://res.cloudinary.com/thirtythree/image/upload/v1728655859/director-rescaled_ggponn.jpg",
  ];
  console.log(governors);
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

      <div className="lg:flex justify-center lg:space-x-12 items-center">
        <div>
          <img
            className="lg:w-[500px] object-cover lg:h-[500px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726672771/governors_foqct3.png"
            alt=""
          />
          <h1 className=" text-lg text-center text-blue-900 font-bold">
            BOARD OF GOVERNORS
          </h1>
        </div>

        <div className="flex flex-col justify-center mt-10 space-y-3 lg:mt-0 items-center">
          <iframe
            width="360"
            height="315"
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
            className="py-3 bg-blue-900 w-[360px] rounded-md text-white"
          >
            Take a tour
          </motion.button>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
