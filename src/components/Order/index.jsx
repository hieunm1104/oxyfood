import React, { useState } from "react";
import "./style.scss";
import { Button, Input, InputNumber, Select } from "antd";
import OrderModal from "common/OrderModal";
function Order(props) {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="order">
      <img src="/images/ot.png" alt="" className="img-ot"/>
      <img src="/images/hoa.png" alt="" className="img-hoa"/>
      <div className="order-main">
        <div className="order-main__group-title">
          <div className="order-main__group-title--title">
            Đặt mua sản phẩm của Oxy Garden
          </div>
          <div className="order-main__group-title--subtitle">
            Đăng ký mua hàng ngay!
          </div>
        </div>
        <div className="order-main__sell">
          <span className="fast-sell">Giảm giá 34% toàn bộ sản phẩm</span>
          <span className="bonus">
            Chương trình khuyến mãi đặc biệt chỉ dành riêng cho bạn kết thúc
            sau:
          </span>
          <div className="order-main__sell--times">
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
        <div className="order-main__form">
          <Input className="input" placeholder="Tên của bạn" />
          <InputNumber
            bordered={false}
            controls={false}
            className="inputnumber"
            placeholder="Số điện thoại"
          />
          <Input className="input" placeholder="Địa chỉ" />
          <div className="group-select">
            <Select
              defaultValue="lucy"
              className="select"
              style={{ width: 120 }}
              onChange={handleChange}
              dropdownStyle={{ background: "#e2e0d9" }}
              options={[
                { value: "jack", label: "Muối ớt đỏ Oxy" },
                { value: "lucy", label: "Muối ớt đỏ Oxy" },
                { value: "Yiminghe", label: "Muối ớt đỏ Oxy" },
              ]}
            />
            <InputNumber
              className="inputnumber-select"
              bordered={false}
              controls={false}
              placeholder="Số lượng"
            />
          </div>
          <span className="add">THÊM SẢN PHẨM</span>
        <div className="button">
        <Button className="btn-buy" onClick={() => setIsOpenModal(true)}>ĐẶT HÀNG GIẢM NGAY 34%</Button>
        </div>
          <div className="desc">
          (Sau khi đăng ký nhận ưu đãi, nhân viên chăm sóc khách hàng của chúng tôi sẽ liên ngay với bạn)
          </div>
        </div>
      </div>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

export default Order;
