import React from "react";
import "./style.scss";
function Intro(props) {
  return (
    <div className="intro">
      <div className="intro-border">
        <div className="intro-border__title">Giới thiệu</div>
        <div className="intro-border__subtitle">Đôi nét về Oxy Garden</div>
        <div className="intro-border__desc">
          t It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        <div className="intro-border__subdesc">
          Khách hàng có thể kết nối với chúng tôi qua cách kênh:
        </div>
        <div className="intro-border__social">
          <a href="#">
            <img src="/images/mess-intro.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/zalo-intro.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/tiktok-intro.png" alt="" />
          </a>
          <a href="#">
            <img src="/images/phone-intro.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;
