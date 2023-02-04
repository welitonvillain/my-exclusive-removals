import React from "react";
import CountUp from "react-countup";

export default function Title() {
  return (
    <section className="flex flex-col w-full justify-center items-center px-2 md:w-3/4">
      <div>
        <span className="font-poppins font-semibold text-black text-5xl sm:text-6xl md:text-7xl">
          +
        </span>
        <span className="font-poppins font-black text-yellow-400 text-5xl sm:text-6xl md:text-7xl">
          <CountUp start={0} end={250} duration={3} />
        </span>
      </div>
      <span className="font-poppins font-semibold text-black text-5xl w-full text-center sm:text-6xl md:text-7xl">
        satisfied customers!
      </span>
    </section>
  );
}
