import React, { useState } from "react";
import "./style.scss";
import { Modal } from "antd";
import { Button, Input, InputNumber, Select } from "antd";
import SuccessModal from "common/SuccessModal";

function OrderModal({ isOpenModal, setIsOpenModal }) {
  const [isOpenModal2, setIsOpenModal2] = useState(false);
  const handleOk = () => {
    setIsOpenModal(false);
  };

  const handleCancel = () => {
    setIsOpenModal(false);
  };
  return (
    <div className="order-modal">
      <Modal
        open={isOpenModal}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="modal-affi-wrap"
        destroyOnClose={true}
        footer={false}
      >
        <div className="modal-affi">
          <div className="group-title">
            <div className="title">Đặt mua sản phẩm của Oxy Garden</div>
            <div className="subtitle">Đăng ký mua hàng ngay!</div>
          </div>
          <div className="form">
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
            <div className="group-select">
              <Select
                defaultValue="lucy"
                className="select"
                style={{ width: 120 }}
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
            <div className="group-text">
            <span className="add">THÊM SẢN PHẨM</span>
            <span className="delete">Xóa sản phẩm</span>

            </div>
            <div className="button">
              <Button className="btn-buy" onClick={() => setIsOpenModal2(true)}>ĐẶT HÀNG GIẢM NGAY 34%</Button>
            </div>
            <div className="desc">
              (Sau khi đăng ký nhận ưu đãi, nhân viên chăm sóc khách hàng của
              chúng tôi sẽ liên ngay với bạn)
            </div>
          </div>
        </div>
      </Modal>
    <SuccessModal isOpenModal2={isOpenModal2} setIsOpenModal2={setIsOpenModal2} setIsOpenModal={setIsOpenModal2}/>

    </div>
  );
}

export default OrderModal;
