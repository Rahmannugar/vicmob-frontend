import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Carousel = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="h-[400px] object-cover w-screen"
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg"
          alt="Carousel-1"
        />

        {/* sliders */}
        <div className="md:hidden">
          <div className="bg-white p-2 rounded-full absolute bottom-40 z-20 left-2">
            <ChevronLeftIcon />
          </div>
          <div className="bg-white p-2 rounded-full absolute bottom-40 z-20 right-2">
            <ChevronRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Carousel;
