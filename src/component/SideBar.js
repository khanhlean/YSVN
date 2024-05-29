import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const [isActive, setIsActive] = useState();
  return (
    <div className="flex flex-col text-center fixed left-0 top-0 z-100 w-[60px] h-full bg-[#005BAA]">
      <div className="w-full my-5">
        <NavLink className="" to="/">
          <img
            className="w-[53px] left-0 right-0 mx-auto"
            src="https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/ac3889b0c2b0ac7664b413e6eceb1f98e3b5c2a3"
            alt=""
          />
        </NavLink>
      </div>
      <div className="h-full">
        <div
          onClick={() => setIsActive("stockrating")}
          className={`py-2 hover:bg-[#003359] duration-300 ${
            isActive === "stockrating" ? "bg-[#003359]" : ""
          } `}
        >
          <NavLink className="" to="/stockrating">
            <img
              className="w-[45px] h-[45px] left-0 right-0 mx-auto "
              src="https://www.figma.com/file/P2iGOaz7q9OlUs1i0KhY1r/image/d3855812b36da220deb49b17ae00edf8f9380122"
              alt=""
            />
          </NavLink>
        </div>

        <div
          onClick={() => setIsActive("stockscreener")}
          className={`py-2 hover:bg-[#003359] duration-300 ${
            isActive === "stockscreener" ? "bg-[#003359]" : ""
          } `}
        >
          <NavLink className="" to="/stockrating">
            <img
              className="w-[45px] h-[45px] left-0 right-0 mx-auto "
              src="https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/assets/img/theme/logo-stockscreener-min.svg"
              alt=""
            />
          </NavLink>
        </div>

        <div
          onClick={() => setIsActive("trading")}
          className={`py-2 hover:bg-[#003359] duration-300 ${
            isActive === "trading" ? "bg-[#003359]" : ""
          } `}
        >
          <NavLink className="" to="/stockrating">
            <img
              className="w-[45px] h-[45px] left-0 right-0 mx-auto "
              src='https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/assets/img/theme/logo-foreignscreener-min.svg"'
              alt=""
            />
          </NavLink>
        </div>

        <div
          onClick={() => setIsActive("wealth")}
          className={`py-2 hover:bg-[#003359] duration-300 ${
            isActive === "wealth" ? "bg-[#003359]" : ""
          } `}
        >
          <NavLink className="h-full bg-red-500" to="/wealth">
            <img
              className="w-[45px] h-[45px] left-0 right-0 mx-auto "
              src="https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/assets/img/theme/logo-wealth-min.svg"
              alt=""
            />
          </NavLink>
        </div>

        <div
          onClick={() => setIsActive("yslive")}
          className={`py-2 hover:bg-[#003359] duration-300 ${
            isActive === "yslive" ? "bg-[#003359]" : ""
          } `}
        >
          <NavLink className="" to="/stockrating">
            <img
              className="w-[45px] h-[45px] left-0 right-0 mx-auto "
              src="https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/assets/img/theme/logo-yslive-min.svg"
              alt=""
            />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col items-center h-auto mb-7">
        {/* <div></div> */}
        <div style={{ margin: "24px 0" }}>
          {/* <div style={{ backgroundColor: "gray", margin: "24px 0", borderRadius: "50%", width: "45px", height: "45px" }}></div> */}
          <div>
            <ErrorIcon
              sx={{
                backgroundColor: "white",
                height: "35px",
                width: "35px",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
