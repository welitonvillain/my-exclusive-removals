import { HiChevronDown } from "react-icons/hi";

import Navbar from "../../Navbar";
import Presentation from "../../Presentation";
import Contact from "../../Contact";

import { handleClickScroll } from "../../../pages/api/commons";

import styles from "../../../styles/custom.module.css";

export default function Home() {
  return (
    <div
      id="home"
      className="flex h-full w-full bg-black flex-col min-h-screen"
    >
      <div
        className={`${styles.backgroundImg} flex h-full w-full min-h-screen bg-right`}
      >
        <div
          className={`flex flex-col h-full w-full px-4 pt-2 justify-between min-h-screen md:bg-smooth md:items-center lg:items-start lg:px-12 ${styles.backgroundBlack}`}
        >
          <Navbar />
          <Presentation />
          <Contact />
          <div
            className="flex w-full justify-center items-center flex-col pb-6"
            onClick={() => handleClickScroll("reviews")}
          >
            <HiChevronDown className="text-2xl animate-bounce cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
