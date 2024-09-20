const Newsletter = () => {
  return (
    <div className="pb-10 mx-5">
      <form className="max-w-sm mx-auto bg-black text-white  rounded-lg shadow-lg py-7 px-5">
        <h1 className="text-center mb-5 font-bold">
          Subscribe for our newsletter
        </h1>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border w-full border-gray-300 text-black text-sm rounded-lg "
            placeholder="name@email.com"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Newsletter;
