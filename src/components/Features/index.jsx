import React, { useState } from "react";
import "./style.scss";
import { Button } from "antd";
import OrderModal from "common/OrderModal";

function Features(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="features">
        <img src="/images/background.jpg" alt="" className="img-bg" />

      <div className="features-border">
        <div className="features-border__left">
          <div className="features-border__left--title">Gia Vị Oxy Garden</div>
          <div className="features-border__left--subtitle">
            Đặc sản núi chứa chan
          </div>
          <div className="features-border__left--desc">
            Giảm giá 34% toàn bộ sản phẩm
          </div>
          <div className="features-border__left--button">
            <Button className="btn-buy" onClick={() => setIsOpenModal(true)} >ĐẶT HÀNG GIẢM NGAY 34%</Button>
            <Button className="btn-buy mobile" onClick={() => setIsOpenModal(true)} >ĐẶT HÀNG NGAYYY</Button>
          </div>
        </div>
        <div className="features-border__right">
          <img
            src="/images/background-main-right.png"
            alt=""
            className="img-background"
          />
          <div className="social">
            <a href="#">
              {" "}
              <img src="/images/phone.png" alt="" />
            </a>
            <a href="#">
              {" "}
              <img src="/images/zalo.png" alt="" />
            </a>
            <a href="#">
              <img src="/images/mess.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

export default Features;
