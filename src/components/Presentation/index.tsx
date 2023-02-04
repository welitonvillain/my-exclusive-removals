import Typewriter from "typewriter-effect";

const services = ["Packing", "House Removals", "Storage", "Office Moves"];

import styles from "../../styles/custom.module.css";

export default function Presentation() {
  return (
    <section className="flex flex-col w-full h-full md:w-3/4 lg:w-1/2 animate-fade">
      <h1 className="font-poppins font-semibold text-6xl md:text-7xl rounded-lg py-1 flex-nowrap lg:text-8xl">
        <Typewriter
          options={{
            strings: services,
            autoStart: true,
            loop: true,
            delay: 150,
            deleteSpeed: 80,
            cursor: "",
          }}
        />
      </h1>
      <span className="font-poppins font-normal text-5xl py-1 lg:text-7xl">
        Services
      </span>
      <span className="xl:w-4/5 font-mont font-light text-base pt-6 lg:text-lg md:text-">
        Whether you're looking for professional movers or a man & van service,
        we have the experience and equipment needed to deliver.
      </span>
    </section>
  );
}
