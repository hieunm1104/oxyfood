import React, { useState } from "react";
import "./style.scss";
import { Button } from "antd";
import OrderModal from "common/OrderModal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
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
function CardItem({ data }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="card-item">
      <Carousel
      showDots customDot={<CustomDot />}
        responsive={responsive}
        containerClass="carousel-custom"
        infinite={true}
      >
        {data.map((item, index) => (
          <div className="product-border__items--item" key={index}>
            <div
              className="title"
              style={{ background: `${item.background_color}` }}
            >
              {item.name}
            </div>
            <div className="images">
              <img src={item.image} alt="" className="img-main"/>
              <div className="sale-off">
                <img src="/images/sale-off.png" alt="" />
                <div>
                  OFF
                  <span>{item.sale_off}</span>
                </div>
              </div>
            </div>
            <div className="desc">{item.desc}</div>
            <div className="discount">{item.discount}</div>
            <div className="price">{item.price}</div>
            <Button className="btn-buy" onClick={() => setIsOpenModal(true)}>
              Đặt hàng giảm ngay 34%
            </Button>
          </div>
        ))}
      </Carousel>

      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </div>
  );
}

export default CardItem;
