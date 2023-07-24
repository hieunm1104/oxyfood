import React from "react";
import "./style.scss";
function Sales({ data }) {
  return (
    <div className="sales">
      <div className="sales-main">
        {data.map((item, index) => (
          <div className="sales-main__box">
            <div className="sales__box--icon">
              <img src={item.image} alt="" />
            </div>
            <div className="sales-main__box--title">{item.title}</div>
            <div className="sales-main__box--desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sales;
