import React, {useState} from "react";
import "./style.scss";
import { Button } from "antd";
import OrderModal from "common/OrderModal";

function Quality({ data }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="quality">
      <div className="quality-border">
        <div className="quality-border__title">
          Tại sao khách hàng nên chọn sản phẩm của Oxy Garden
        </div>
        <div className="quality-border__subtitle">
          Cam kết chất lượng Oxy Garden
        </div>
        <div className="quality-border__boxs">
          <div className="quality-border__boxs--box">
            <img src="/images/quality-1.png" alt="" />
            <div className="group">
              <div className="title">Sản xuất thủ công</div>
              <div className="desc">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div className="quality-border__boxs--box">
            <img src="/images/quality-2.png" alt="" />
            <div className="group">
              <div className="title">Không chất bảo quản</div>
              <div className="desc">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          <div className="quality-border__boxs--box">
            <img src="/images/quality-3.png" alt="" />
            <div className="group">
              <div className="title">Nguyên liệu tươi 100%</div>
              <div className="desc">
                orem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
        </div>
        <div className="quality-border__button">
            <Button className="btn-sell" onClick={() => setIsOpenModal(true)}>
            Đặt hàng ngay
            </Button>
        </div>
      </div>
      <OrderModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}
export default Quality;
