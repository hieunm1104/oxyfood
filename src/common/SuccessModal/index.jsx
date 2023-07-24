import React from "react";
import "./style.scss";
import { Modal } from "antd";
import { Button, Input, InputNumber, Select } from "antd";

function SuccessModal({ isOpenModal2, setIsOpenModal2 }) {
  const handleOk = () => {
    setIsOpenModal2(false);
  };

  const handleCancel = () => {
    setIsOpenModal2(false);
  };
  return (
    <div className="order-modal">
      <Modal
        open={isOpenModal2}
        onOk={handleOk}
        onCancel={handleCancel}
        wrapClassName="modal-affi-wrapp"
        destroyOnClose={true}
        footer={false}
      >
        <div className="modal-affii">
          <div className="group-title">
            <div className="title">THÔNG BÁO</div>
            <div className="subtitle">Đặt hàng thành công</div>
          </div>
          <div className="desc">
            Cảm ơn quý khách đã tin tưởng và sử dụng sản phẩm của Oxy Garden.
            Sau khi đặt hàng thành công, nhân viên chăm sóc khách hàng của chúng
            tôi sẽ liên ngay với bạn
          </div>
          <div className="button">
            <Button className="btn-back" onClick={() =>
            setIsOpenModal2(false)}
               >Quay về trang chủ</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default SuccessModal;
