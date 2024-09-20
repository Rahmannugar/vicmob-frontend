import { Datepicker } from "flowbite-react";
import Carousel from "../components/Carousel";
import CountrySelect from "../components/CountrySelect";
import { useState } from "react";

const Contact = () => {
  const [image, setImage] = useState<string>(
    "https://res.cloudinary.com/thirtythree/image/upload/v1726835930/blank-image_qedg25.webp"
  );

  const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result && typeof reader.result === "string") {
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Carousel />

      <p className="text-green-500 text-sm m-5 bg-blue-900 py-4 px-5 shadow-md text-justify">
        PLEASE NOTE THAT THIS IS A PRE-REGISTRATION FORM FOR VISITATION
        PURPOSES. TO COMPLETE STUDENT REGISTRATION, DOWNLOAD THE REGISTRATION
        FORM
        <a href="/files/form.pdf" download>
          <span className="text-white"> HERE</span>
        </a>
      </p>

      {/* form */}
      <div className="py-12 mx-5">
        <form className="max-w- mx-auto bg-transparent border border-gray-400 rounded-lg shadow-xl py-10 px-5">
          <h1 className="text-center mb-7 font-bold">Contact Form</h1>
          {/* grid-content */}
          <div className="md:grid-cols-2 md:grid md:gap-4">
            {/* left column */}
            <div className="md:border md:border-gray-400 p-3">
              {/* Profile Photo Upload */}
              <div className="flex flex-col space-y-5 items-center mb-5 col-span-2">
                <div className="shrink-0">
                  <img
                    id="preview_img"
                    className="h-44 w-44  "
                    src={image}
                    alt="Current profile photo"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose image</span>
                  <input
                    type="file"
                    onChange={loadFile}
                    className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-violet-50 file:text-violet-700
                  hover:file:bg-violet-100
                "
                  />
                </label>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Surname"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Surname
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Surname"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="First Name"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter First Name"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Other Name(s)"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Other Name(s)
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Other Name(s)"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="dateOfBirth"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Date Of Birth
                </label>
                <Datepicker />
              </div>
              <div className="mb-5 px-5">
                <label
                  htmlFor="Country"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Country
                </label>
                <CountrySelect />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Phone Number"
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="HomeAddress"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Home Address
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Home Address"
                  required
                />
              </div>
            </div>

            {/* right column */}
            <div className="md:border md:border-gray-400 p-3">
              <div className="mb-5">
                <label
                  htmlFor="Guardian"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Guardian Full name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Guardian Full name"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="Guardian"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Relationship to Student
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Parent/Guardian"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="GuardianAddress"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Guardian Address
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Guardian Address"
                  required
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-black dark:text-white"
                >
                  Guardian Phone Number
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Guardian Phone Number"
                  required
                />
              </div>

              {/* Admission Type */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  I am applying for admission to (please tick one):
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id="early-years"
                    type="radio"
                    name="admissionType"
                    value="Early Years"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="early-years"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Early Years
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="junior-school"
                    type="radio"
                    name="admissionType"
                    value="Junior School"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="junior-school"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Junior School
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="middle-school"
                    type="radio"
                    name="admissionType"
                    value="Middle School"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="middle-school"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Middle School
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="high-school"
                    type="radio"
                    name="admissionType"
                    value="High School"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="high-school"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    High School
                  </label>
                </div>
              </div>

              {/* Apply As */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  I am applying as a (please tick one):
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id="new-student"
                    type="radio"
                    name="applyAs"
                    value="New Student"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="new-student"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    New Student
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="returning-student"
                    type="radio"
                    name="applyAs"
                    value="Returning Student"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="returning-student"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Returning Student
                  </label>
                </div>
              </div>

              {/* Gender */}
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-black dark:text-white">
                  Gender (please tick one):
                </label>
                <div className="flex items-center mb-4">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    value="Male"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="male"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    value="Female"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    htmlFor="female"
                    className="ml-2 text-sm font-medium text-gray-900"
                  >
                    Female
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="text-white mt-5 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
