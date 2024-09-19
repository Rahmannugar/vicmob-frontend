import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Schools = () => {
  return (
    <div>
      <h1 className="text-center bg-orange-800 font-black text-2xl mt-10 text-white py-6">
        <SchoolIcon fontSize="large" /> Vicmob Schools
      </h1>

      <div className="md:flex items-center px-5 md:px-0 lg:space-x-20 md:space-x-10 justify-center mt-6 md:mt-10">
        {/* primary school */}
        <div className="flex flex-col relative space-y-4">
          <img
            className="object-cover md:w-[300px] lg:w-[450px] rounded-lg lg:h-[400px] h-[300px] border-4 border-orange-800"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726713037/primary_s67lxw.jpg"
            alt="primary"
          />
          <button className="lg:text-xl hover:bg-white hover:text-orange-800 duration-300 absolute top-[45%] md:top-[40%] lg:top-[50%] bg-orange-800 text-white p-2 rounded-md font-bold">
            Vicmob Nursery and Primary school
          </button>
          <p className="text-justify md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            Welcome to Vicmob Nursery & Primary School, where we provide an
            exceptional educational foundation for children, nurturing their
            growth and development in a caring and engaging environment.
          </p>
          <button className="bg-orange-800 py-3 px-4 text-white hover:bg-white hover:border-black hover:border hover:text-orange-800 duration-300">
            Visit school <ArrowForwardIcon />
          </button>
        </div>

        {/* secondary school */}
        <div className="mt-10 md:mt-0 flex flex-col relative space-y-4">
          <img
            className="object-cover border-4 border-orange-800 lg:w-[450px] lg:h-[400px] md:w-[300px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726712728/secondary_zhcrqb.jpg"
            alt="secondary"
          />
          <button className="lg:text-xl hover:bg-white hover:text-orange-800 duration-300 absolute top-[45%] lg:top-[50%] bg-orange-800 text-white p-2 rounded-md font-bold">
            Vicmob High school
          </button>
          <p className="text-justify md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            At Vicmob High School, we shape future leaders by offering a
            comprehensive education that prioritizes excellence and fosters a
            strong sense of social accountability.
          </p>
          <button className="bg-orange-800 py-3 px-4 text-white hover:bg-white hover:border-black hover:border hover:text-orange-800 duration-300">
            Visit school <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Schools;
