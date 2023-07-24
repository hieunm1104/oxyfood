import React, { useState } from "react";
import "./style.scss";
import CardItem from "./CardItem";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function Product({ data }) {
  return (
    <div className="product">
     
      <div className="product-border">
        <div className="product-border__title">Sản phẩm</div>
        <div className="product-border__subtitle">
          Nước chấm & sốt siêu ngon
        </div>

        <div className="product-border__sell">
          <span className="fast-sell">Giảm giá 34% toàn bộ sản phẩm</span>
          <span className="bonus">
            Chương trình khuyến mãi đặc biệt chỉ dành riêng cho bạn kết thúc
            sau:
          </span>
          <div className="product-border__sell--times">
            <div className="time">
              <span className="number">00</span>
              <span>Ngày</span>
            </div>
            <div className="time">
              <span className="number">00</span>
              <span>Giờ</span>
            </div>
            <div className="time">
              <span className="number">00</span>
              <span>Phút</span>
            </div>
            <div className="time">
              <span className="number">00</span>
              <span>Giây</span>
            </div>
          </div>
        </div>
        <div className="product-border__items">
          <CardItem data={data} />
        </div>
      </div>
    </div>
  );
}
export default Product;
