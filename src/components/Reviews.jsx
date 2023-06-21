import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  return (
    <div className="bg-[#202020] text-white text-center w-full h-full mt-12 p-12 overflow-x-hidden">
      <h1 className="text-4xl font-bold mb-4">Ready to grow?</h1>
      <p className="text-sm mb-4">
        See why 100,000+ businesses trust us. Book a personalized demo to see
        <br />
        how SalesCaptain provides you the right tools to grow your business.
      </p>
      <div className="max-w-[700px] mx-auto mt-6 flex items-center justify-center gap-x-2 mb-12">
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
      <div>
        <div className="flex justify-center text-center">
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af532e37289b6270d7aba8_stars.webp"
            loading="lazy"
            width="120"
            alt="/"
          />
          <div className="">500+ Reviews</div>
        </div>
        <div className="flex justify-center mt-8">
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562b0cd76f4e7026cba9_18-187112_google-transparent-white-logo.webp"
            loading="lazy"
            width="100"
            alt=""
            className=""
          />
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af5631b8d59acd37236ca0_c-dark.webp"
            loading="lazy"
            width="100"
            alt=""
            className=""
          />
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62af562bb61c17fbd3d37043_6033de5cf82f810004782cb7.webp"
            loading="lazy"
            width="100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
