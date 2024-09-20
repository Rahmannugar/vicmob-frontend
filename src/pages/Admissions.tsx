const Admissions = () => {
  return (
    <div>
      <div className="relative">
        <h1 className="absolute left-10 z-20 bottom-10 font-bold text-white text-2xl lg:text-3xl">
          ADMISSION.
        </h1>
        <img
          className="w-screen h-[300px] object-cover "
          src="https://res.cloudinary.com/thirtythree/image/upload/v1726476546/vicmob-1_cwnkls.jpg"
          alt="about-image"
        />
      </div>

      <div className="mx-5 my-12 md:flex md:space-x-6 space-y-12 md:space-y-0 justify-center">
        <div className="md:w-1/2 bg-blue-900 text-white rounded-xl shadow-xl p-7">
          <h1 className="font-bold">Our Admission Procedures</h1>
          <ul className="list-disc text-sm">
            <li>
              Parents are to visit the school and obtain our admission form for
              a nonrefundable fee of ₦15,000
            </li>
            <li>
              After submission of the form, the child will take an entrance
              examination (CBT or PPT). The expected cutoff mark for admission
              is 50% and above. Any child who scores lower will not be admitted
              into the school.
            </li>
            <li>
              After two weeks of taking the entrance examination, the successful
              candidates will be invited for an interview session with the
              admissions team for an oral test.
            </li>
            <li>
              On successful completion of the interview, a copy of the child's
              transcript for the last class/school MUST be presented to the
              admissions team.
            </li>
            <li>
              Parents are to therefore proceed to make at least a 50%-payment of
              the tuition fee within a stipulated period of time as directed by
              the admissions team. The remaining 50% tuition fee MUST be
              completed by at most the first week of resumption. A full one-time
              payment can however be made.
            </li>
            <li>
              All admitted students will be given an orientation on the first
              week
            </li>
          </ul>
        </div>

        <div className="bg-gray-100 border border-black p-7 rounded-xl shadow-xl">
          <h1 className="font-bold">
            Documents neccesary for registration are:
          </h1>
          <ul className="text-sm list-disc">
            <li>Duly completed and signed Admission form</li>
            <li>Birth certificate of the child</li>
            <li>2 recent passport-sized photographs</li>
            <li>Last term report from the immediate previous school.</li>
            <li>Recent medical report of the child's current health status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Admissions;
