import React from "react";
import "./style.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items:5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  return (
    <div className={active ? "active" : "inactive"} onClick={() => onClick()}>
      {active ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="5" fill="#2F2F2F" />
          <circle cx="8" cy="8" r="7.5" stroke="#2F2F2F" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="7.5" stroke="#2F2F2F" />
        </svg>
      )}
    </div>
  );
};
function Feedback({ data }) {
  return (
    <div className="feedback">
      <div className="feedback-main">
        <div className="feedback-main__title">
          Khách hàng nói gì về chúng tôi
        </div>
        <div className="feedback-main__subtitle">Phản hồi từ khách hàng</div>
        <div className="feedback-main__cards">
          <Carousel
           transitionDuration={200}
            showDots
            customDot={<CustomDot />}
            responsive={responsive}
            containerClass="carousel-custom"
            infinite={true}
          >
            {data.map((item, index) => (
              <div className="feedback-main__cards--card" key={index}>
                <img src={item.avatar} alt="" />
                <div className="name">{item.name}</div>
                <div className="line"></div>
                <div className="feedbacks">{item.feedback}</div>
                <div className="confirm">{item.confirm}</div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
