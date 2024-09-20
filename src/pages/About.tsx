const About = () => {
  return (
    <div>
      <div className="relative">
        <h1 className="absolute left-10 z-20 bottom-10 font-bold text-white text-2xl lg:text-3xl">
          ABOUT US.
        </h1>
        <img
          className="w-screen h-[300px] object-cover "
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726529414/vicmob-3_bjoejg.jpg"
          alt="about-image"
        />
      </div>

      <div className="lg:flex justify-center lg:px-10 mx-5 bg-blue-900 text-white shadow-xl rounded-xl mt-16">
        <div>
          <div className="px-5 py-5 flex flex-col space-y-2 lg:w-[50vw] cursor-pointer">
            <h1 className=" font-bold italic">Foreword</h1>
            <p className="text-justify text-sm">
              <span className="font-bold">VICMOB SCHOOLS</span> is a
              comprehensive institution, encompassing preschool, primary, and
              secondary education. We hold ourselves to the highest
              international standards, ensuring that every student receives an
              education that prepares them for a life of excellence. With a rich
              history spanning over 17 years, we have grown into an educational
              institution that values the contributions of our dedicated
              educators, administrators, and the quality of the educational
              services we provide.
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
            <span className="font-bold">VICMOB Private School</span> was founded
            on September 16, 1996, by Pastor David and Deaconess Adeola
            Ogunseye. The establishment was officially commissioned by Mrs. Wami
            Akinoso, Deaconess Adeola's former boss from her 17-year tenure at
            Toria School. Vicmob Private School began with a modest enrollment
            of 35 students, supported by a dedicated team of five teachers (two
            males and three females) along with a bursar. The school’s original
            colors, cream and dark brown, were later changed to a new color
            scheme, symbolizing its growth and evolution over time. After years
            of dedication and nurturing young minds, the school celebrated a
            milestone in 2003, when its first set of primary 6 pupils graduated,
            marking 11 successful years of operation. Building on this success,
            VICMOB High School was established on September 17, 2007. The high
            school opened its doors with 11 students and a teaching staff of
            five, continuing the legacy of academic excellence set by the
            primary school. Together, VICMOB Private School and VICMOB High
            School have stood as pillars of educational development in the
            community.
          </p>
        </div>
      </div>
      {/* Vision and Mission section */}
      <div className="md:flex px-5  cursor-pointer py-12 space-y-10 md:space-y-0 items-center">
        <div className="md:w-1/2">
          <img
            className="h-[300px] mx-auto"
            src="https://res.cloudinary.com/thirtythree/image/upload/v1726813649/values_hh30ht.png"
            alt="values"
          />
        </div>
        <div className="flex flex-col bg-gray-200 shadow-xl p-5 rounded-xl space-y-3 md:w-1/2 2xl:w-[700px]">
          <div>
            <h1 className=" font-bold italic">Vision statement</h1>
            <p className="text-sm">
              building CHILDREN To Become EXCELLENT in All Facets Of Life.
            </p>
          </div>

          <div>
            <h1 className=" font-bold italic">Mission statement</h1>
            <h2 className="text-sm">
              To provide every child of
              <span className="font-bold">VICMOB Schools</span> with an
              excellent and wholesome education by:
            </h2>
            <ul className="list-disc px-2 text-sm">
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

      {/* anthem and pledge section */}
      <div className="md:flex md:space-x-5 space-y-12 md:space-y-0 mx-5 justify-center ">
        <ul className="bg-blue-200 shadow-xl text-sm rounded-xl md:w-[50%] 2xl:w-[700px] p-5">
          <h1 className="font-bold italic">School Anthem</h1>
          <li>Friends tell me where I can go</li>
          <li>Where potential can find expression</li>
          <li>Where my dreams can be well spelt out</li>
          <li>Where I can see the me in me</li>
          <li>Oh VICMOB High School there we go</li>
          <li>
            Where destinies are molded Where faith, knowledge and skills we get
          </li>
          <li>Memories of you we cherish</li>
        </ul>

        <ul className="bg-blue-900 text-white text-sm shadow-xl rounded-xl md:w-[50%] 2xl:w-[700px] p-5">
          <h1 className="font-bold italic">School Pledge</h1>
          <li>Oh VICMOB High School</li>
          <li>I can't afford to love you less</li>
          <li>As I am being imparted by the reality</li>
          <li>Of my purpose in your domain</li>
          <li>I promise to apply the knowledge from thee</li>
          <li>To the development of my father land</li>
          <li>Long live VICMOB High School</li>
          <li>Long live Federal Republic of Nigeria.</li>
        </ul>
      </div>

      {/* school hours and extra curricular activities */}
      <div className="md:flex justify-center md:space-x-9 items-center my-12 p-5 space-y-6 md:space-y-0 bg-gray-100 border border-black mx-5 rounded-xl shadow-xl">
        <div>
          <h1 className="font-bold italic">SCHOOL HOURS</h1>
          <ul>
            <li>
              <span className="font-bold">Resumption time:</span>
              <span> 7:30am, Assembly time: 7:40am</span>
            </li>
            <li>
              <span className="font-bold">Reading time:</span>
              <span> 2-2:30pm (Mon-Tue)</span>
            </li>
            <li>
              <span className="font-bold">Closing time:</span>
              <span> 2:30pm</span>
            </li>
            <li>
              <span className="font-bold">Lesson:</span>
              <span> 3:00-4:30pm</span>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold italic">EXTRA-CURRICULAR ACTIVITIES</h1>
          <ul>
            <li>
              <span className="font-bold">Wednesdays:</span>
              <span> Sports(8-9:20am)</span>
            </li>
            <li>
              <span className="font-bold">Thursdays:</span>
              <span> Mentorship session (2.-3pm)</span>
            </li>
            <li>
              <span className="font-bold">Thursdays (fortnight):</span>
              <span> Club Activities</span>
            </li>
            <li>
              <span className="font-bold">Thursdays (fortnight):</span>
              <span> Gender Assemblies (2 - 3pm)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
