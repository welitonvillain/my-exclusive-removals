import Image from "next/image";

import logoImg from "../../assets/logo.png";
import styles from "../../styles/custom.module.css";

import { handleClickScroll } from "../../pages/api/commons";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between w-full h-20 self-start mb-2">
      <Image
        src={logoImg}
        alt="My exclusive removals"
        className="w-20 md:w-24 lg:w-28"
      />
      <div className="hidden w-1/2 justify-between items-center font-light xl:w-1/4 md:flex md:w-2/5 md:text-sm">
        <a
          className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:rounded-lg
              before:-bottom-1 before:left-0 before:bg-yellow-400
              before:hover:scale-x-125 before:scale-x-0
              before:transition before:ease-in-out before:duration-300"
          onClick={() => handleClickScroll("home")}
        >
          Home
        </a>
        <a
          className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:rounded-lg
              before:-bottom-1 before:left-0 before:bg-yellow-400
              before:hover:scale-x-125 before:scale-x-0
              before:transition before:ease-in-out before:duration-300"
          onClick={() => handleClickScroll("reviews")}
        >
          Reviews
        </a>
        <a
          className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:rounded-lg
              before:-bottom-1 before:left-0 before:bg-yellow-400
              before:hover:scale-x-125 before:scale-x-0
              before:transition before:ease-in-out before:duration-300"
          onClick={() => handleClickScroll("services")}
        >
          Services
        </a>
        <a
          className="cursor-pointer relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] before:rounded-lg
              before:-bottom-1 before:left-0 before:bg-yellow-400
              before:hover:scale-x-125 before:scale-x-0
              before:transition before:ease-in-out before:duration-300"
          onClick={() => handleClickScroll("about-us")}
        >
          About Us
        </a>
      </div>
      <button
        className={`flex items-center justify-center px-4 py-2 font-semibold whitespace-nowrap ${styles.freeButton}`}
      >
        Get a free quote!
      </button>
    </header>
  );
}
