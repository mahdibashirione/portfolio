import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="border-t-[1px] text-[12px] backdrop-blur-[2px] md:text-sm w-full border-gray-600">
      <div className="flex justify-between container text-gray-500">
        {/* Social Link */}
        <div className="flex">
          <span className="p-2 border-r-[1px] border-gray-600  block">
            find me in:
          </span>
          <Link
            to=""
            className="p-2 flex items-center hover:text-secondary duration-200 text-base border-r-[1px] border-gray-600"
          >
            <SlSocialInstagram />
          </Link>
          <Link
            to=""
            className="p-2 flex items-center hover:text-secondary duration-200 text-lg md:text-xl border-r-[1px] border-gray-600"
          >
            <TiSocialLinkedin />
          </Link>
        </div>
        {/* Github Link */}
        <div className="border-l-[1px] border-gray-600">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            to="https://github.com/mahdibashirione"
            className="py-2 p-6 flex gap-1 items-center hover:text-secondary duration-200"
          >
            @my-profile <FaGithub className="text-lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
