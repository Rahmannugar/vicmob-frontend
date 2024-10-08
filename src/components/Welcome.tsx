const Welcome = () => {
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
              className="lg:w-[500px] object-cover lg:h-[500px]"
              src="https://res.cloudinary.com/thirtythree/image/upload/v1726672771/governors_foqct3.png"
              alt="governors"
            />
            <h1 className="text-center text-lg text-blue-900 font-bold">
              Board of Governors
            </h1>
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
    </div>
  );
};
export default Welcome;
