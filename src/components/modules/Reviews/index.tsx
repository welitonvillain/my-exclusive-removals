import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

import { FaStar } from "react-icons/fa";

import { openWhatsapp } from "../../../pages/api/whatsapp";
import { sendEmail } from "../../../pages/api/email";
import { getReviews } from "../../../pages/api/reviews";

import {
  Container,
  ReviewsCard,
  ReviewsContainer,
  ReviewsContent,
  ReviewsPhoto,
  ReviewsSlider,
} from "../../../styles/pages/reviews";

import userPic1 from "/public/user-pic-1.jpeg";
import userPic2 from "/public/user-pic-2.jpeg";
import userPic3 from "/public/user-pic-3.jpeg";
import userPic4 from "/public/user-pic-4.jpeg";
import userPic5 from "/public/user-pic-5.jpeg";

export default function Reviews() {
  return (
    <Container id="reviews">
      <div className="header">
        <span className="title">Reviews</span>
        <span className="subtitle">
          + <span>250</span> satisfied customers!
        </span>
      </div>

      <ReviewsContainer>
        <span className="reviewsTitle">
          See what customers say about our services:
        </span>

        <ReviewsSlider>
          <ReviewsCard>
            <ReviewsContent>
              <ReviewsPhoto>
                <Image src={userPic1} alt="User profile picture" />
              </ReviewsPhoto>
              <span className="reviewsCardDesc">
                "I recently used this company for my move and I couldn't be
                happier with the service I received. The movers were
                professional, efficient, and took great care of my belongings. I
                would highly recommend this company to anyone in need of a
                stress-free move."
              </span>
              <div className="reviewsCardFooter">
                <div className="reviewsStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="reviewsCardCustomerName">Jane Smith</span>
              </div>
            </ReviewsContent>
          </ReviewsCard>

          <ReviewsCard>
            <ReviewsContent>
              <ReviewsPhoto>
                <Image src={userPic2} alt="User profile picture" />
              </ReviewsPhoto>
              <span className="reviewsCardDesc">
                "This company made my move a breeze. The team was on-time,
                organized, and went above and beyond to ensure everything was
                packed and transported safely. I was very impressed with their
                attention to detail and customer service."
              </span>
              <div className="reviewsCardFooter">
                <div className="reviewsStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="reviewsCardCustomerName">Michael Johnson</span>
              </div>
            </ReviewsContent>
          </ReviewsCard>

          <ReviewsCard>
            <ReviewsContent>
              <ReviewsPhoto>
                <Image src={userPic3} alt="User profile picture" />
              </ReviewsPhoto>
              <span className="reviewsCardDesc">
                "I had a great experience with this company. The movers were
                friendly and made sure to handle my furniture and belongings
                with care. They also had all the necessary equipment to make the
                move as smooth as possible. I would definitely use them again."
              </span>
              <div className="reviewsCardFooter">
                <div className="reviewsStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="reviewsCardCustomerName">Sarah Lee</span>
              </div>
            </ReviewsContent>
          </ReviewsCard>

          <ReviewsCard>
            <ReviewsContent>
              <ReviewsPhoto>
                <Image src={userPic4} alt="User profile picture" />
              </ReviewsPhoto>
              <span className="reviewsCardDesc">
                "I was very pleased with the service I received from this
                company. They were prompt, efficient, and professional. The
                movers took great care to ensure that everything was packed and
                transported without damage. I would highly recommend them."
              </span>
              <div className="reviewsCardFooter">
                <div className="reviewsStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="reviewsCardCustomerName">David Brown</span>
              </div>
            </ReviewsContent>
          </ReviewsCard>

          <ReviewsCard>
            <ReviewsContent>
              <ReviewsPhoto>
                <Image src={userPic5} alt="User profile picture" />
              </ReviewsPhoto>
              <span className="reviewsCardDesc">
                "I was very impressed with the level of customer service I
                received from this company. The team was friendly, efficient,
                and went above and beyond to make my move as stress-free as
                possible. I would definitely use them again and recommend them
                to others."
              </span>
              <div className="reviewsCardFooter">
                <div className="reviewsStars">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="reviewsCardCustomerName">Emily Davis</span>
              </div>
            </ReviewsContent>
          </ReviewsCard>
        </ReviewsSlider>
      </ReviewsContainer>
    </Container>
  );
}
