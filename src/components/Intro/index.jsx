import React from "react";
import "./style.scss";

function Intro(props) {
 
  return (
    <div className="intro">
      <div className="intro-border">
        <div className="intro-border__title">Giới thiệu</div>
        <div className="intro-border__subtitle">Đôi nét về Oxy Garden</div>
        <div className="intro-border__desc">
        OXY - Thương hiệu nước chấm và sốt ngon, với công thức Gia truyền và nguồn nguyên liệu từ thiên nhiên 100% tại Núi Chứa Chan, Xuân Lộc, Đồng Nai.

        Nước chấm được sử dụng nguyên liệu tươi, sạch và an toàn cho sức khỏe. Được sản xuất thủ công hoàn toàn, với đội ngũ đầu bếp nhiều kinh nghiệm.
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
