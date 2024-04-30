import { FaFacebook, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[400px] bg-[#caabab63] text-white mt-5">
        <h1 className="lg:absolute py-10 md:py-10  left-[43%] text-2xl">CraftyCorner</h1>
      <div className="flex  md:flex-row lg:flex-row justify-center items-center  min-h-[400px] gap-5 lg:gap-52">
        <div className=" w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          <div className=" px-7 py-3 space-y-3">
            <h1 className="text-xl font-bold mb-2">Properties</h1>
            <p className="">Commercial</p>
            <p className="">Residential</p>
            <p className="">Luxury</p>
          </div>
          <div className="border-l-2 border-[#3330336d] px-7 py-3 space-y-3">
            <h1 className="text-xl font-bold mb-2 ">Company</h1>
            <p className="">About us</p>
            <p className="">Services</p>
            <p className="">Presentation</p>
            <p className="">Clients</p>
          </div>
          <div className="border-l-2 border-[#3330336d] px-7 py-3 space-y-3">
            <h1 className="text-xl font-bold mb-2 ">Clients</h1>
            <Link to="/signup" className="block ">
              Sign Up
            </Link>
            <Link to="/signin" className="block  ">
              Sign In
            </Link>
            <p className="">Promotions</p>
          </div>
        </div>
        <div className="flex gap-4 lg:flex-row md:flex-row flex-col">
          <FaLinkedin className="w-8 h-8  cursor-pointer" />
          <FaSquareXTwitter className="w-8 h-8   cursor-pointer" />
          <FaFacebook className="w-8 h-8   cursor-pointer" />
          <FaGithub className="w-8 h-8   cursor-pointer" />
        </div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </footer>
  );
};

export default Footer;
