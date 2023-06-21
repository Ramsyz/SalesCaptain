import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import SignIn from "../page/SignIn";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div className="shadow sticky top-0 bg-white">
      <div className="flex justify-between items-center h-[80px] max-w-[1240px] mx-auto px-4">
        <img
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d6709cf8832cfd1775bf4e_salescaptainfull.webp"
          loading="lazy"
          width="150"
          sizes="(max-width: 479px) 100vw, (max-width: 991px) 167.3984375px, 100vw"
        />
        <ul className="hidden md:flex">
          <li className="p-4">Products</li>
          <li className="p-4">Solutions</li>
          <li className="p-4">Pricing</li>
          <li className="p-4">Resources</li>
          <li className="p-4">Support</li>
        </ul>
        <div className="z-10 md:hidden" onClick={handleNav}>
          {nav ? (
            <FaTimes size={20} className="cursor-pointer" />
          ) : (
            <FaBars size={20} className="cursor-pointer" />
          )}
        </div>

        {/*Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-[80%] ease-in duration-300"
              : "fixed top-[-100%]"
          }
        >
          <ul className="w-full h-full text-center pt-12 space-y-8 font-bold bg-white">
            <li className="p-4">Products</li>
            <li className="p-4">Solutions</li>
            <li className="p-4">Pricing</li>
            <li className="p-4">Resources</li>
            <li className="p-4">Support</li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <a href="/SignIn" className="border md:border-black p-2 rounded-md">
            SignIn
            {/* <Link to="/SignIn">SignIn</Link> */}
          </a>
          <button className="md:text-white bg-black ml-4">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
