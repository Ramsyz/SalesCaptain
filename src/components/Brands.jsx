import { FaAirbnb } from "react-icons/fa";
import { SiMarriott, SiBmw, SiWalmart, SiFortinet } from "react-icons/si";

export default function Brands() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <h2 className="text-xl text-center md:text-4xl font-bold leading-8">
          Trusted by 100,000+ local business globally
        </h2>
        {/* <div className="max-w-xl mx-auto mt-10 grid grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
        <div className="mt-4 grid grid-cols-2 items-center gap-y-8  md:grid-cols-6 gap-x-20 max-w-[700px] mx-auto">
          <FaAirbnb size={50} />
          <SiMarriott size={50} />
          <SiBmw size={50} />
          <SiWalmart size={75} />
          <SiFortinet size={50} />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}
