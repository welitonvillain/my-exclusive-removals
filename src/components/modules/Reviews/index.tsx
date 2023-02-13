import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import { openWhatsapp } from "../../../pages/api/whatsapp";
import { sendEmail } from "../../../pages/api/email";
import { getReviews } from "../../../pages/api/reviews";

import Title from "../../Title";
import Review from "../../Review";

import styles from "../../../styles/custom.module.css";

export default function Reviews() {
  return (
    <div
      id="reviews"
      className="flex items-center justify-between h-full w-full bg-gray-200 flex-col min-h-screen py-6 lg:py-10"
    >
      <Title />

      <section className="flex w-full flex-col mb-4">
        <span className="font-mont font-normal text-black px-2 mb-4 text-center sm:text-lg md:text-xl lg:text-2xl lg:mb-6">
          See what customers say about our services:
        </span>
        <section className="flex w-full h-64 overflow-x-auto px-4 lg:h-80 lg:px-12">
          {getReviews().map((review) => (
            <Review
              key={review.author}
              message={review.message}
              author={review.author}
              stars={review.stars}
            />
          ))}
        </section>
      </section>

      <section className="flex w-full flex-col lg:flex-row px-4 lg:px-12 md:w-3/4">
        <button
          className={`flex flex-row w-full h-12 justify-center items-center font-medium mb-2 lg:mr-4 rounded-lg hover:bg-green-500 transition-all duration-200 ${styles.whatsButtonFilled}`}
          onClick={() => openWhatsapp()}
        >
          <FaWhatsapp
            className="pr-2 text-white transition-all duration-200"
            size={26}
          />
          Whatsapp
        </button>
        <button
          className={`flex flex-row w-full h-12 justify-center items-center font-medium rounded-lg hover:bg-blue-500 transition-all duration-200 ${styles.emailButtonFilled}`}
          onClick={() => sendEmail()}
        >
          <MdMailOutline
            className="pr-2 text-white transition-all duration-200"
            size={28}
          />
          Email
        </button>
      </section>
    </div>
  );
}
