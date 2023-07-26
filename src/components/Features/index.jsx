import React, { useState, useEffect } from "react";
import "./style.scss";
import { Button } from "antd";
import OrderModal from "common/OrderModal";

function Features(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [active, setActive] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // setinterval
    let time = 0;
    const interval = setInterval(() => {
      time = time + 1;
      if (time % 2 === 0) {
        setShowMessage(true);
      } else {
        setShowMessage(false);
        setActive(true);
      }
    }
      , 2000);
    return () => clearInterval(interval);

  }, [])

  useEffect(() => {
    let timeout = null;
    if (showMessage) {
      timeout = setTimeout(() => {
        setActive(false);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [showMessage])

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
          <div className={`social ${active ? 'activee' : ''}`}>
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
          <div className={`noti ${showMessage ? 'show' : ''}`}>
          {
            showMessage ? 
            <div className={`form-noti ${active ? 'active' : 'inactive'}`}>
             <div className="left">
              <img src="/img-product/item-1.png" alt="" />
             </div>
             <div className="right">
                <div className="right-top">
                <div className="title">Khach hang lam anh dung</div>
                <div className="phone"> 0937713582</div>
                <div className="desc">san pham muoi ot </div>
                </div>
                <div className="right-bottom">
                  <div className="price">199.000VNĐ</div>
                </div>
             </div>
              </div>
              : <></>
          }
        </div>
        </div>
       
      </div>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

export default Features;
