const Admission = () => {
  return (
    <div className="py-5 flex justify-center items-center px-3">
      <div className="bg-blue-950 hover:opacity-60 duration-300 shadow-xl text-white h-[300px] px-5 rounded-xl py-7">
        <h1 className="text-2xl font-bold">Apply for Admission</h1>
        <p className="mt-5 text-lg">
          Admission into Vicmob schools for 2024/2025 Academic session is in
          progress.
        </p>
        <div className="mt-10 flex  space-x-3 justify-center items-center">
          <a href="/files/form.pdf" download>
            <button className="border-white hover:text-blue-800 hover:bg-white duration-300 border p-3">
              Download Application form
            </button>
          </a>
          <a href="/register">
            <button className="border-white border p-3 hover:text-blue-800 hover:bg-white duration-300">
              Online pre-registration
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Admission;
