import React, {useState} from "react";
import "./style.scss";
import { Button } from "antd";
import OrderModal from "common/OrderModal";
function HeaderMenu({ data }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="header-menu">
      <div className="header-menu-border">
        <div className="header-menu-border__logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div className="header-menu-border__menu">
          {data.map((item, index) => (
            <div key={index} className="item">
              <a href="#">{item.name}</a>
            </div>
          ))}
        </div>
        <div className="header-menu-border__button">
          <Button className="btn-buy" onClick={() => setIsOpenModal(true)} >Đặt hàng ngay</Button>
        </div>
      </div>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

export default HeaderMenu;
