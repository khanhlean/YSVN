import React, { useState } from "react";
import Button from "@mui/material/Button";
import EastIcon from "@mui/icons-material/East";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function KhaoSat2({ setKhaoSatPoint }) {
  const [selectedOption, setSelectedOption] = useState("1");

  const handleOptionChange = (value) => {
    setSelectedOption(value);
    setKhaoSatPoint(value);
  };

  return (
    <div className="h-full bg-ys-lightblue">
      <div className="h-full grid items-center mx-20 ">
        <p className="text-ys-blue font-bold ">
          <EastIcon sx={{ color: "black" }} />2
        </p>

        <label className="border rounded h-12 flex items-center bg-white">
          <span className="title">
            {selectedOption === "1" ? (
              <CheckCircleIcon
                className="mx-2"
                sx={{ cursor: "pointer", color: "#0066b3" }}
              />
            ) : (
              <RadioButtonUncheckedIcon
                className="mx-2"
                sx={{ cursor: "pointer", color: "#ECF2FE" }}
              />
            )}
            Mới bắt đầu
          </span>

          <input
            type="radio"
            name="question-1"
            style={{ display: "none" }}
            onClick={() => handleOptionChange("1")}
          />
        </label>
        <label className="border rounded h-12 flex items-center bg-white">
          {selectedOption === "2" ? (
            <CheckCircleIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#0066b3" }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#ECF2FE" }}
            />
          )}
          <span className="title">Còn hạn chế</span>
          <input
            type="radio"
            name="question-1"
            style={{ display: "none" }}
            onClick={() => handleOptionChange("2")}
          />
        </label>
        <label className="border rounded h-12 flex items-center bg-white">
          {selectedOption === "3" ? (
            <CheckCircleIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#0066b3" }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#ECF2FE" }}
            />
          )}
          <span className="title">Khá tốt</span>
          <input
            type="radio"
            name="question-1"
            style={{ display: "none" }}
            onClick={() => handleOptionChange("3")}
          />
        </label>
        <label className="border rounded h-12 flex items-center bg-white">
          {selectedOption === "4" ? (
            <CheckCircleIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#0066b3" }}
            />
          ) : (
            <RadioButtonUncheckedIcon
              className="mx-2"
              sx={{ cursor: "pointer", color: "#ECF2FE" }}
            />
          )}
          <span className="title">Vượt trội</span>
          <input
            type="radio"
            name="question-1"
            style={{ display: "none" }}
            onClick={() => handleOptionChange("4")}
          />
        </label>
      </div>
    </div>
  );
}
