import React from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderMenuMobile from "./HeaderMenuMobile";
let data = [
  {
    name: "Giới thiệu",
    link: "/airdrop",
    type: "link",
  },
  {
    name: "Sản phẩm",
    link: "/marketplace",
    type: "link",
  },
  {
    name: "Cam kết chất lượng",
    link: "/roll",
    type: "link",
  },
  {
    name: "Chính sách bán hàng",
    link: "/stake",
    type: "link",
  },
];
function Header(props) {
  return (
    <div>
      <HeaderMenu data={data} />
      <HeaderMenuMobile data={data} />
    </div>
  );
}

export default Header;
