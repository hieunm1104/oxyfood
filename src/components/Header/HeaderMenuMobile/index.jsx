import React, { useState } from "react";
import { Drawer, Button } from "antd";
import "./style.scss";
function HeaderMenuMobile({ data }) {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="header-menu-mobile">
      <div
        className="logo-mobile"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          cursor: "pointer",
        }}
      >
        <img src="/images/logo.png" alt="" />
      </div>
      <div
        onClick={showDrawer}
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        rootClassName="header-menu-mobile__drawer"
        closeIcon={
          <div style={{ width: "15px", height: "24px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
            >
              <path
                d="M1 3H21"
                stroke="#E2E0D9"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 10H21"
                stroke="#E2E0D9"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M1 17H21"
                stroke="#E2E0D9"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </div>
        }
      >
        {data.map((item, index) => (
          <div className="menu">
            <a href="#">{item.name}</a>
          </div>
        ))}
      </Drawer>
    </div>
  );
}

export default HeaderMenuMobile;
