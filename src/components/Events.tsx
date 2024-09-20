import { Carousel } from "flowbite-react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Events = () => {
  return (
    <div className="py-10">
      <div className="bg-blue-100 py-12 ">
        <h1 className="text-center text-2xl">News & Events</h1>

        {/* Carousel for mobile and smaller screens */}
        <div className="block h-[900px] lg:hidden mt-[-20px] px-5">
          <Carousel>
            <div className="border-blue-900 flex flex-col space-y-3 border-4 pb-4">
              <img
                className="h-[500px] w-full object-cover"
                src="https://res.cloudinary.com/thirtythree/image/upload/v1726737627/resumption_s5aghc.jpg"
                alt="School resumption"
              />
              <h1 className="text-2xl text-black px-5">School resumption</h1>
              <p className="px-5">
                As we embark on another academic year, we welcome back our
                vibrant community of students and staff. This year promises new
                opportunities for growth, learning, success and excellence!
              </p>
              <span className="px-5">
                <CalendarMonthIcon /> - September 2024
              </span>
            </div>

            <div className="border-blue-800 flex flex-col space-y-3 border-4 pb-4">
              <img
                className="h-[500px] w-full object-cover"
                src="https://res.cloudinary.com/thirtythree/image/upload/v1726738006/anniversary_tbn5sc.png"
                alt="School resumption"
              />
              <h1 className="text-2xl text-black px-5">
                17th year anniversary
              </h1>
              <p className="px-5">
                🎉Celebrating 17 Years of Excellence at VICMOB HIGH SCHOOL!🎉
                For 17 incredible years, we've been shaping bright minds,
                fostering growth, and building a legacy of academic success.
              </p>
              <span className="px-5">
                <CalendarMonthIcon /> - September 2024
              </span>
            </div>
          </Carousel>
        </div>

        {/* Flex layout for desktop and larger screens */}
        <div className="hidden lg:flex justify-center items-center space-x-5 px-10 py-12">
          <div className="border-blue-900 flex flex-col space-y-3 border-4 pb-4">
            <img
              className="h-[300px] w-full object-cover"
              src="https://res.cloudinary.com/thirtythree/image/upload/v1726737627/resumption_s5aghc.jpg"
              alt="School resumption"
            />
            <h1 className="text-2xl text-black px-5">School resumption</h1>
            <p className="px-5">
              As we embark on another academic year, we welcome back our vibrant
              community of students and staff. This year promises new
              opportunities for growth, learning, success and excellence!
            </p>
            <span className="px-5">
              <CalendarMonthIcon /> - September 2024
            </span>
          </div>

          <div className="border-blue-900 flex flex-col space-y-3 border-4 pb-4">
            <img
              className="h-[300px] w-full object-cover"
              src="https://res.cloudinary.com/thirtythree/image/upload/v1726738006/anniversary_tbn5sc.png"
              alt="School resumption"
            />
            <h1 className="text-2xl text-black px-5">17th year anniversary</h1>
            <p className="px-5">
              🎉Celebrating 17 Years of Excellence at VICMOB HIGH SCHOOL!🎉 For
              17 incredible years, we've been shaping bright minds, fostering
              growth, and building a legacy of academic success.
            </p>
            <span className="px-5">
              <CalendarMonthIcon /> - September 2024
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
