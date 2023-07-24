import React from "react";
import "./style.scss";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-main__left">
          <div className="footer-main__left--title">Công ty Oxy Garden</div>
          <div className="footer-main__left--infor">
            <div className="group">
              <img src="/images/home-icon.png" alt="" />
              <span>Địa chỉ:</span>
            </div>
            <div className="group">
              <img src="/images/phone-icon.png" alt="" />
              <span>Hotline: 0987.654.321</span>
            </div>
            <div className="group">
              <img src="/images/mail-icon.png" alt="" />
              <span>Email:</span>
            </div>
            <div className="group">
              <img src="/images/facebook-icon.png" alt="" />
              <span>Facebook: Oxy Garden</span>
            </div>
          </div>
          <div className="footer-main__left--group-contact">
            <div className="connect">Kết nối với chúng tôi:</div>
            <div className="socials">
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
        <div className="footer-main__right">
          <img src="/images/background-footer.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
