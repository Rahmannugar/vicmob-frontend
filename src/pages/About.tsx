const About = () => {
  return (
    <div>
      <div className=" relative">
        <h1 className="absolute left-10 z-20 bottom-10 font-bold text-white text-2xl lg:text-3xl">
          ABOUT US.
        </h1>
        <img
          className="w-screen h-[300px] object-cover "
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726529414/vicmob-3_bjoejg.jpg"
          alt="about-image"
        />
      </div>

      <div className="lg:flex justify-center lg:px-10 mx-5 bg-slate-200 rounded-xl mt-10">
        <div>
          <div className="px-5 py-5 flex flex-col space-y-2 lg:w-[50vw] cursor-pointer">
            <h1 className=" font-bold italic">Foreword</h1>
            <p className="text-justify text-sm">
              VICMOB SCHOOLS is a comprehensive institution, encompassing
              preschool, primary, and secondary education. We hold ourselves to
              the highest international standards, ensuring that every student
              receives an education that prepares them for a life of excellence.
              With a rich history spanning over 17 years, we have grown into an
              educational institution that values the contributions of our
              dedicated educators, administrators, and the quality of the
              educational services we provide.
            </p>
          </div>

          <div className="px-5 py-5 flex flex-col space-y-2 lg:w-[50vw] cursor-pointer">
            <h1 className=" font-bold italic ">Location</h1>
            <p className="text-justify text-sm">
              The schools are strategically located in the serene neighborhood
              of Shasha, Ojo and Elegbede Street respectively, Egbeda, Akowonjo,
              Lagos State. This location was chosen to minimize distractions and
              noise, creating an ideal environment for focused learning.
            </p>
          </div>
        </div>

        <div className="px-5 py-5 flex flex-col space-y-2 lg:w-[50vw] cursor-pointer">
          <h1 className=" font-bold italic">History</h1>
          <p className="text-justify text-sm">
            VICMOB Private School was founded on September 16, 1996, by Pastor
            David and Deaconess Adeola Ogunseye. The establishment was
            officially commissioned by Mrs. Wami Akinoso, Deaconess Adeola's
            former boss from her 17-year tenure at Toria School. Vicmob Private
            School began with a modest enrollment of 35 students, supported by a
            dedicated team of five teachers (two males and three females) along
            with a bursar. The school’s original colors, cream and dark brown,
            were later changed to a new color scheme, symbolizing its growth and
            evolution over time. After years of dedication and nurturing young
            minds, the school celebrated a milestone in 2003, when its first set
            of primary 6 pupils graduated, marking 11 successful years of
            operation. Building on this success, VICMOB High School was
            established on September 17, 2007. The high school opened its doors
            with 11 students and a teaching staff of five, continuing the legacy
            of academic excellence set by the primary school. Together, VICMOB
            Private School and VICMOB High School have stood as pillars of
            educational development in the community.
          </p>
        </div>
      </div>
      {/* Vision and Mission section */}
      <div className="lg:flex px-5 lg:px-0 space-y-5 lg:space-y-0 justify-center items-center">
        <div>
          <h1 className=" font-bold">Vision statement</h1>
          <p>..building CHILDREN To Become EXCELLENT in All Facets Of Life.</p>
        </div>

        <div>
          <h1 className=" font-bold">Mission statement</h1>
          <h2>
            To provide every child of VICMOB Schools with an excellent and
            wholesome education by:
          </h2>
          <ul>
            <li>
              Employing highly experienced teaching and non-teaching staff
            </li>
            <li>
              Providing a very comfortable safe and stimulating learning
              environment
            </li>
            <li>
              Promoting co-curricular activities in order to develop the
              children's innate and social skills
            </li>
            <li>
              Promoting cultural values which are woven into the school's
              curriculum vCreating an awareness of God through His teachings.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
