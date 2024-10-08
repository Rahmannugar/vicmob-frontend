import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Schools = () => {
  return (
    <div>
      <h1 className="text-center text-lg bg-blue-200 font-black mt-10 text-black py-5">
        <SchoolIcon fontSize="medium" /> Vicmob Schools
      </h1>

      <div className="md:flex items-center px-10 md:px-0 lg:space-x-20 md:space-x-10 justify-center mt-6 md:mt-10">
        {/* primary school */}
        <div
          className="flex flex-col relative border-4 border-blue-900
"
        >
          <img
            className="object-cover md:w-[300px] lg:w-[450px] lg:h-[400px] h-[300px] "
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726713037/primary_s67lxw.jpg"
            alt="primary"
          />
          <button className="text-sm bg-blue-900 text-white py-2 font-bold">
            Vicmob Nursery and Primary school
          </button>
          <p className="text-justify py-4 text-xs md:max-w-[300px] px-3 lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            Welcome to Vicmob Nursery & Primary School, where we provide an
            exceptional educational foundation for children, nurturing their
            growth and development in a caring and engaging environment.
          </p>
          <button className="bg-blue-900 py-3 px-4 text-white hover:bg-white hover:border-black hover:border-t hover:text-blue-900 duration-00">
            Visit school <ArrowForwardIcon />
          </button>
        </div>

        {/* secondary school */}
        <div className="mt-10 md:mt-0 flex flex-col relative border-4 border-blue-900">
          <img
            className="object-cover  lg:w-[450px] lg:h-[400px] md:w-[300px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726712728/secondary_zhcrqb.jpg"
            alt="secondary"
          />
          <button className="text-sm bg-blue-900 text-white py-3 font-bold">
            Vicmob High school
          </button>
          <p className="text-justify py-4 text-xs px-3 md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            At Vicmob High School, we shape future leaders by offering a
            comprehensive education that prioritizes excellence and fosters a
            strong sense of social accountability.
          </p>
          <button className="bg-blue-900 py-3 px-4 text-white hover:bg-white hover:border-black hover:border-t text-sm hover:text-blue-900 duration-00">
            Visit school <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Schools;
