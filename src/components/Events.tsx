import { Banner, Button, Carousel, Label, TextInput } from "flowbite-react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Events = () => {
  return (
    <div className="py-10">
      <div className="bg-gray-200 py-12 ">
        <h1 className="text-center text-2xl">News & Events</h1>

        {/* Carousel for mobile and smaller screens */}
        <div className="block h-[900px] lg:hidden mt-[-20px] px-5">
          <Carousel>
            <div className="border-orange-800 flex flex-col space-y-3 border-4 pb-4">
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

            <div className="border-orange-800 flex flex-col space-y-3 border-4 pb-4">
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
          <div className="border-orange-800 flex flex-col space-y-3 border-4 pb-4">
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

          <div className="border-orange-800 flex flex-col space-y-3 border-4 pb-4">
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

      {/* newsletter */}
      <Banner>
        <div className="flex w-full items-center justify-between py-20 border-gray-200 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
          <div className="mx-auto flex w-full shrink-0 items-center sm:w-auto">
            <form
              action="#"
              className="flex w-full flex-col items-center md:flex-row md:gap-x-3"
            >
              <Label
                htmlFor="email"
                className="mb-2 mr-auto shrink-0 font-bold text-xl text-black md:m-0 md:mb-0"
              >
                Sign up for our newsletter
              </Label>
              <TextInput
                className="w-full"
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
              <Button type="submit" className="mt-5 md:mt-0">Subscribe</Button>
            </form>
          </div>
        </div>
      </Banner>
    </div>
  );
};

export default Events;
