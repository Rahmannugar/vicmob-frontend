const Curriculum = () => {
  return (
    <div>
      <div className="relative">
        <h1 className="absolute left-10 z-20 bottom-10 font-black text-white text-2xl lg:text-3xl">
          CURRICULUM.
        </h1>
        <img
          className="w-screen h-[300px] object-cover "
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726476547/vicmob-2_lb2uy9.jpg"
          alt="curriculum-image"
        />
      </div>

      <div className="bg-blue-900 shadow-xl my-10 space-y-3 lg:px-10 px-5 mx-5 rounded-xl py-7">
        <p className="text-sm text-justify text-white">
          Our curriculum is a blend of wide range of learning experiences which
          is aimed at building a total child. Our teachers are highly qualified,
          laboratories are well structured with a variety of other facilities
          including a sporting complex, all for the purpose of making learning
          fun and homely. At VICMOB Schools, we operate a hybrid curriculum
          which enables our learners to be prepared for both local and
          international examinations. Students are prepared for NECO Basic
          Education Certificate Examination (BECE), Lagos State Junior School
          Certificate Examination JSCE, the West African Senior School
          Certificate Examination (WASSCE), NECO Senior School Certificate
          Examination, International General Certificate of Secondary Education
          (IGCSE), Scholastics Aptitude Tests (SAT), TOEFL and IELTS.
        </p>

        <p className="text-green-500 text-sm text-justify">
          PLEASE NOTE THAT STUDENTS ARE NOT ALLOWED TO SIT FOR ANY EXTERNAL
          EXAMINATIONS, EXCEPT THOSE THE SCHOOL OFFICIALLY REGISTERS THEM FOR.
        </p>
      </div>

      {/* senior school subjects section */}
      <div className="md:flex justify-center mb-12">
        {/* first */}
        <div className="space-y-4">
          <h1 className="font-bold text-center">
            SUBJECTS OFFERED (Senior School)
          </h1>
          <ul className="border-2 border-black md:w-[40vw] 2xl:w-[700px] bg-sky-100 mx-5">
            <li className="border-black border-b px-5 py-2">
              English Language
            </li>
            <li className="border-black border-b px-5 py-2">Mathematics</li>
            <li className="border-black border-b px-5 py-2">Physics</li>
            <li className="border-black border-b px-5 py-2">Chemistry</li>
            <li className="border-black border-b px-5 py-2">Biology</li>
            <li className="border-black border-b px-5 py-2">Civic Education</li>
            <li className="border-black border-b px-5 py-2">
              Literature-In-English
            </li>
            <li className="border-black border-b px-5 py-2">French Language</li>
            <li className="border-black border-b px-5 py-2">
              Christian Religious Studies
            </li>
          </ul>
        </div>

        {/* second */}
        <div>
          <ul className="border-2 md:mt-10 border-black md:w-[40vw] 2xl:w-[700px] bg-blue-900 text-white mx-5">
            <li className="border-black border-b px-5 py-2">Commerce</li>
            <li className="border-black border-b px-5 py-2">Economics</li>
            <li className="border-black border-b px-5 py-2">
              Financial Accounting
            </li>
            <li className="border-black border-b px-5 py-2">Government</li>
            <li className="border-black border-b px-5 py-2">
              Geography/Agricultural Science
            </li>
            <li className="border-black border-b px-5 py-2">
              Further Mathematics
            </li>
            <li className="border-black border-b px-5 py-2">Data Processing</li>
            <li className="border-black border-b px-5 py-2">
              Technical Drawing
            </li>
          </ul>
        </div>
      </div>

      {/* junior school subjects section */}
      <div className="md:flex justify-center mb-12 md:space-x-5">
        {/* first */}
        <div className="space-y-4">
          <h1 className="font-bold text-center">
            SUBJECTS OFFERED (Junior School)
          </h1>
          <ul className="border-2 border-black mx-5 md:w-[40vw] 2xl:w-[700px] bg-sky-100">
            <li className="border-black border-b px-5 py-2">Mathematics</li>
            <li className="border-black border-b px-5 py-2">
              English Language
            </li>
            <li className="border-black border-b px-5 py-2">Yoruba Language</li>
            <li className="border-black border-b px-5 py-2">French Language</li>
            <li className="border-black border-b px-5 py-2">
              Literature-In-English
            </li>
            <li className="border-black border-b px-5 py-2">
              Christian Religious Studies / Islamic Religious Studies
            </li>
            <li className="border-black border-b px-5 py-2">
              Physical & Health Education
            </li>
            <li className="border-black border-b px-5 py-2">Music</li>
            <li className="border-black border-b px-5 py-2">Basic Science</li>
            <li className="border-black border-b px-5 py-2">Civic Education</li>
          </ul>
        </div>

        {/* second */}
        <div>
          <ul className="border-2 md:mt-10 border-black md:w-[40vw] 2xl:w-[700px] bg-blue-900 text-white mx-5">
            <li className="border-black border-b px-5 py-2">
              Creative and Cultural Arts
            </li>
            <li className="border-black border-b px-5 py-2">Social Studies</li>
            <li className="border-black border-b px-5 py-2">
              Basic Technology
            </li>
            <li className="border-black border-b px-5 py-2">Home Economics</li>
            <li className="border-black border-b px-5 py-2">
              Security Education
            </li>
            <li className="border-black border-b px-5 py-2">
              Business Studies
            </li>
            <li className="border-black border-b px-5 py-2">
              Agricultural Science
            </li>
            <li className="border-black border-b px-5 py-2">History</li>
            <li className="border-black border-b px-5 py-2">
              Information and Communication Technology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Curriculum;
