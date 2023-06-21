import Hero1 from "../assets/hero1.png";

const Herosection = () => {
  return (
    <div>
      <div className="max-w-[700px] mx-auto mt-[-96px] w-full h-screen flex flex-col text-center justify-center">
        <div className="text-center">
          <h1 className="md:text-6xl text-4xl font-bold md:py-6 tracking-tight text-gray-900">
            Best way to grow your local business
          </h1>
          <p className="mt-6 md:text-2xl sm:text-xl leading-6 text-gray-600">
            Artificial Intelligence powered easy-to-use tools to get more
            customers &amp; give them a better experience
          </p>
          <div className="max-w-[700px] mx-auto mt-6 flex items-center justify-center gap-x-2">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="p-2 border border-sky-500 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />

            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white bg-blue-700 p-2 rounded-md"
            >
              GET DEMO
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-[1450px] mx-auto">
        <img src={Hero1} alt="/" />
      </div>
    </div>
  );
};

export default Herosection;
