import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import { openWhatsapp } from "../../pages/api/whatsapp";
import { sendEmail } from "../../pages/api/email";

import styles from "../../styles/custom.module.css";

export default function Contact() {
  return (
    <section
      className={`flex flex-col w-full mt-6 md:w-3/4 lg:w-1/2 animate-fade`}
    >
      <span className="font-mont text-normal mb-6 lg:text-xl md:text-lg">
        Get in touch with just one click:
      </span>

      <div className="flex w-full flex-col lg:flex-row">
        <button
          className={`flex flex-row w-full h-12 justify-center items-center font-medium mb-2 group hover:bg-green-400 transition-all duration-200 lg:mr-4 ${styles.whatsButton}`}
          onClick={() => openWhatsapp()}
        >
          <FaWhatsapp
            className="pr-2 text-green-400 group-hover:text-white transition-all duration-200"
            size={26}
          />
          Whatsapp
        </button>
        <button
          className={`flex flex-row w-full h-12 justify-center items-center group font-medium mb-2 hover:bg-blue-400 transition-all duration-200 ${styles.emailButton}`}
          onClick={() => sendEmail()}
        >
          <MdMailOutline
            className="pr-2 text-blue-400 group-hover:text-white transition-all duration-200"
            size={28}
          />
          Email
        </button>
      </div>
    </section>
  );
}
