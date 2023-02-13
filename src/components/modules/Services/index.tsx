import {
  TbHome,
  TbBuildingStore,
  TbTruck,
  TbArrowNarrowRight,
} from "react-icons/tb";

import {
  Container,
  ProcessSlider,
  ProcessCard,
  ProcessContainer,
  ProcessContent,
  Service,
  ServiceContainer,
} from "../../../styles/pages/services";

export default function Services() {
  return (
    <Container id="services">
      <span className="title">Services</span>
      <span className="description">
        We’re your friendly, neighbourhood Berkshire movers. Whether you need
        domestic removals, office removals or a house clearance, we can help!
      </span>

      <ServiceContainer>
        <Service>
          <TbHome className="serviceIcon" />
          <span className="serviceTitle">Domestic Removals</span>
          <span className="serviceDesc">
            We have the know-how, experience and equipment to help you make
            moving day a stress-free and enjoyable experience.
          </span>
        </Service>

        <Service>
          <TbBuildingStore className="serviceIcon" />
          <span className="serviceTitle">Business and Office Removals</span>
          <span className="serviceDesc">
            Moving business premises can be a disruptive process — for staff and
            customers alike. We have developed a system that minimizes
            disruption and allows you to focus on your business.
          </span>
        </Service>

        <Service>
          <TbTruck className="serviceIcon" />
          <span className="serviceTitle">Man and Van Services</span>
          <span className="serviceDesc">
            Need a house clearing service? Selling goods with delivery? Got
            large appliances you need to dispose of? Our man & van services have
            got you covered.
          </span>
        </Service>
      </ServiceContainer>

      <ProcessContainer>
        <div className="processTitle">
          <span>Our Removals Process</span>
          <TbArrowNarrowRight className="processTitleIcon" />
        </div>

        <ProcessSlider>
          <ProcessCard>
            <span>1</span>
            <ProcessContent>
              <span className="processCardTitle">Planning</span>
              <span className="processCardDesc">
                Before we start any removals job, we plan every aspect of the
                process in detail. This ensures everything goes smoothly on the
                day.
              </span>
            </ProcessContent>
          </ProcessCard>

          <ProcessCard>
            <span>2</span>
            <ProcessContent>
              <span className="processCardTitle">Packing</span>
              <span className="processCardDesc">
                If you want us to take care of packing up your current property,
                that’s no problem. We use a range of durable packaging materials
                and years of packing experience.
              </span>
            </ProcessContent>
          </ProcessCard>

          <ProcessCard>
            <span>3</span>
            <ProcessContent>
              <span className="processCardTitle">Moving</span>
              <span className="processCardDesc">
                We use specialised equipment, know-how and years of experience
                to ensure moving day is as stress-free and rewarding as
                possible.
              </span>
            </ProcessContent>
          </ProcessCard>

          <ProcessCard>
            <span>4</span>
            <ProcessContent>
              <span className="processCardTitle">Declutter</span>
              <span className="processCardDesc">
                Need to dispose of furniture, possessions or general clutter?
                We’ll take care of that for you — whether it involves charitable
                donations or the local tip.
              </span>
            </ProcessContent>
          </ProcessCard>

          <ProcessCard>
            <span>5</span>
            <ProcessContent>
              <span className="processCardTitle">Unpacking</span>
              <span className="processCardDesc">
                As part of our planning process, we’ll make arrangements to
                unpack your possessions at your new property — leaving you free
                to enjoy the experience.
              </span>
            </ProcessContent>
          </ProcessCard>

          <ProcessCard>
            <span>6</span>
            <ProcessContent>
              <span className="processCardTitle">Cleaning</span>
              <span className="processCardDesc">
                If you need help with cleaning your old or new property, we can
                arrange for a professional cleaning service to attend on the
                day.
              </span>
            </ProcessContent>
          </ProcessCard>
        </ProcessSlider>
      </ProcessContainer>
    </Container>
  );
}
