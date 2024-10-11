import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Schools = () => {
  return (
    <div>
      <h1 className="text-center text-lg font-black mt-10 bg-black text-white py-5">
        <SchoolIcon fontSize="medium" /> Vicmob Schools
      </h1>

      {/* Updated grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-0 mt-7 md:mt-10">
        {/* Early school */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            className="object-cover object-center w-full lg:w-[450px] lg:h-[400px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1728647468/early-years_mdknqs.jpg"
            alt="Early years"
          />
          <button className="text-sm bg-black text-white py-3 font-bold w-full lg:w-[450px]">
            Our Early Years
          </button>
          <p className="text-justify py-4 text-xs px-3 md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            Welcome to our early years programme, where we provide an
            exceptional educational foundation for children, nurturing their
            growth and development in a caring and engaging environment.
          </p>
          <button className="bg-black py-3 w-full lg:w-[450px] text-white text-sm">
            Visit school <ArrowForwardIcon />
          </button>
        </div>

        {/* Junior school */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            className="object-cover w-full lg:w-[450px] lg:h-[400px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1728618597/photo_5785276873213854741_y_emiw1h.jpg"
            alt="Junior"
          />
          <button className="text-sm bg-red-700 text-white py-3 font-bold w-full lg:w-[450px]">
            Our Junior School
          </button>
          <p className="text-justify py-4 text-xs px-3 md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            Our Junior School offers a nurturing environment where we help young
            learners explore their interests and develop strong academic and
            interpersonal skills.
          </p>
          <button className="bg-red-700 py-3 w-full lg:w-[450px] text-white text-sm">
            Visit school <ArrowForwardIcon />
          </button>
        </div>

        {/* Middle school */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            className="object-cover w-full lg:w-[450px] lg:h-[400px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1728618624/IMG-20240706-WA0064_ha3c0s.jpg"
            alt="Middle"
          />
          <button className="text-sm bg-purple-900 text-white py-3 font-bold  w-full lg:w-[450px]">
            Our Middle School
          </button>
          <p className="text-justify py-4 text-xs px-3 md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            In our Middle School, we guide students through their early teenage
            years by focusing on both academic excellence and personal growth,
            preparing them for future challenges.
          </p>
          <button className="bg-purple-900 py-3  w-full lg:w-[450px] text-white text-sm">
            Visit school <ArrowForwardIcon />
          </button>
        </div>

        {/* High school */}
        <div className="flex flex-col items-center justify-center text-center relative">
          <img
            className="object-cover w-full lg:w-[450px] lg:h-[400px] h-[300px]"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1728618598/IMG-20240628-WA0005_hxgh76.jpg"
            alt="High"
          />
          <button className="text-sm bg-green-900 text-white py-3 font-bold w-full lg:w-[450px]">
            Our High School
          </button>
          <p className="text-justify py-4 text-xs px-3 md:max-w-[300px] lg:max-w-[450px] md:h-[140px] lg:h-[120px]">
            At Vicmob High, we shape future leaders by offering a comprehensive
            education that prioritizes excellence and fosters a strong sense of
            social accountability.
          </p>
          <button className="bg-green-900 py-3 w-full lg:w-[450px] text-white text-sm">
            Visit school <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Schools;
