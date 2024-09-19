import { Carousel } from "flowbite-react";

const Events = () => {
  return (
    <div className="py-10">
      <div className="bg-gray-200">
        <h1 className="text-center text-2xl">News & Events</h1>
        <div className="bg-orange-900 h-1 flex justify-center items-center mt-1"></div>

        {/* Carousel for mobile and smaller screens */}
        <div className="block lg:hidden h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10">
          <Carousel>
            <img
              className=""
              src="https://res.cloudinary.com/thirtythree/image/upload/v1726737627/resumption_s5aghc.jpg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>

        {/* Flex layout for desktop and larger screens */}
        <div className="hidden lg:flex lg:flex-wrap lg:justify-center lg:items-center gap-4">
          <img
            className="w-1/5"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            className="w-1/5"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            className="w-1/5"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            className="w-1/5"
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            className="w-1/5"
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};
export default Events;
