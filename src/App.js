import Features from "components/Features";
import "./app.scss";
import Header from "./components/Header";
import Intro from "components/Intro";
import Product from "components/Product";
import Quality from "components/Quality";
import Sales from "components/Sales";
import Feedback from "components/Feedback";
import Order from "components/Order";
import Footer from "components/Footer";
import "react-multi-carousel/lib/styles.css";

let list_item = [
  {
    name: "Muối Ớt Xanh Oxy",
    image: "/img-product/item-1.png",
    price: "45.000Đ",
    desc: "Thông tin giới thiệu về sản phẩm muối ớt xanh Oxy",
    discount: "299.000Đ",
    background_color: "#60971B",
    sale_off: " 34%",
  },
  {
    name: "Muối ớt đỏ Oxy",
    image: "/img-product/item-2.png",
    price: "45.000Đ",
    desc: "Thông tin giới thiệu về sản phẩm muối ớt đỏ Oxy",
    discount: "299.000Đ",
    background_color: "#D40606",
    sale_off: " 34%",
  },
  {
    name: "Sốt chấm tiêu đen Oxy",
    image: "/img-product/item-3.png",
    price: "45.000Đ",
    desc: "Thông tin giới thiệu về sản phẩm sốt chấm tiêu đen Oxy",
    discount: "299.000Đ",
    background_color: "#535250",
    sale_off: "34%",
  },
  {
    name: "Combo muối chấm oxy",
    image: "/img-product/combo-item.jpg",
    price: "130.000Đ",
    desc: "Thông tin giới thiệu về sản phẩm combo muối chấm Oxy",
    discount: "299.000Đ",
    background_color: "#535250",
    sale_off: "34%",
  },
];
let data_sales = [
  {
    image: "/images/icon-sale.png",
    title: "Chính sách bán hàng 1",
    desc: "Giao Hàng Tận Nơi Trên Toàn Quốc",
  },
  {
    image: "/images/icon-sale.png",
    title: "Chính sách bán hàng 1",
    desc: "Giao Hàng Tận Nơi Trên Toàn Quốc",
  },
  {
    image: "/images/icon-sale.png",
    title: "Chính sách bán hàng 1",
    desc: "Giao Hàng Tận Nơi Trên Toàn Quốc",
  },
];
let data_feedback = [
  {
    avatar: "/avatar-user/avt-1.png",
    name: "Bạn Ngọc Hà",
    feedback:
      "Tôi là khách hàng thường xuyên ở đây. Rất hài lòng vì sản phẩm tốt, chất lượng đáng giá tiền và cả sự chăm sóc, hỗ trợ khách hàng tận tình của cửa hàng nữa.",
    confirm: "Khách hàng đã mua sản phẩm Muối ớt đỏ Oxy",
  },
  {
    avatar: "/avatar-user/avt-2.png",
    name: "Bạn Anh Dũng",
    feedback:
      "Sản phẩm thật sự chất lượng. Có thể yên tâm và tin tưởng tưởng tuyệt đối vào uy tín của Oxy Garden mọi người nhé.",
    confirm: "Khách hàng đã mua sản phẩm Muối ớt đỏ Oxy",
  },
  {
    avatar: "/avatar-user/avt-3.png",
    name: "Bạn Kiều Oanh",
    feedback:
      "Tôi là khách hàng thường xuyên ở đây. Rất hài lòng vì sản phẩm tốt, chất lượng đáng giá tiền và cả sự chăm sóc, hỗ trợ khách hàng tận tình của cửa hàng nữa.",
    confirm: "Khách hàng đã mua sản phẩm Muối ớt đỏ Oxy",
  },
  {
    avatar: "/avatar-user/avt-4.png",
    name: "Bạn Đức Long",
    feedback:
      "Sản phẩm thật sự chất lượng. Có thể yên tâm và tin tưởng tưởng tuyệt đối vào uy tín của Oxy Garden mọi người nhé.",
    confirm: "Khách hàng đã mua sản phẩm Muối ớt đỏ Oxy",
  },
];
function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Intro />
      <Product data={list_item} />
      <Quality />
      <Sales data={data_sales} />
      <Feedback data={data_feedback}/>
      <Order />
      <Footer />
    </div>
  );
}

export default App;
