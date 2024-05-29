import React from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

export default function KhaoSat0({ setKhaoSatPoint }) {
  const handleStartClick = () => {
    setKhaoSatPoint(null);
  };

  return (
    <div className="flex ">
      <img
        src="https://ysradar.yuanta.com.vn/wp-content/themes/ysradar/inc/pages/wealth/img/survey_banner.png"
        alt="Survey banner"
        className="w-1/2"
      />
      <div className="bg-ys-lightblue w-1/2 h-128 flex items-center ">
        <div className="mx-10">
          <h2 className="text-2xl text-ys-blue font-bold">
            XÁC ĐỊNH KHẨU VỊ RỦI RO
            <br />
            TRƯỚC KHI ĐẦU TƯ
          </h2>
          <p className="text-gray-600 mt-4">
            Trả lời khảo sát một cách cẩn thận, mỗi câu hỏi sẽ giúp xác định
            khẩu vị rủi ro của bạn và đưa ra danh mục đầu tư phù hợp với bạn.
          </p>
          <div className="mt-4">
            <Button
              variant="contained"
              endIcon={<EastIcon />}
              style={{ backgroundColor: "#FF5500", fontWeight: "bold" }}
              onClick={handleStartClick}
            >
              Bắt Đầu
            </Button>
            <br />
            <br />
            <a href="" className="text-sm">
              Bỏ qua khảo sát <HelpOutlineIcon style={{ fontSize: "16px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
