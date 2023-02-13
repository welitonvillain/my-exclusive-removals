import { AiFillStar } from "react-icons/ai";

import styles from "../../styles/custom.module.css";

interface reviewType {
  message: string;
  author: string;
  stars: number;
}

function makeStars(quantity: number): JSX.Element[] {
  const stars = [];
  for (let i = 0; i < quantity; i++) {
    stars.push(<AiFillStar key={i} />);
  }

  return stars;
}

export default function Review({ message, author, stars }: reviewType) {
  return (
    <div
      className={`flex flex-col justify-between p-4 h-full rounded-lg border-2 text-black bg-white mr-4 md:mr-8 ${styles.review}`}
    >
      <span className="font-mont font-light italic text-sm text-justify sm:text-base md:text-lg">
        {message}
      </span>
      <div className="flex justify-between mt-4 items-center">
        <div className="flex text-yellow-400 sm:text-base md:text-lg lg:text-xl">
          {makeStars(stars)}
        </div>
        <span className="font-mont font-bold text-sm sm:text-base md:text-lg">
          {author}
        </span>
      </div>
    </div>
  );
}
