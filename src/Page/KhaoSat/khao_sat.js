import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import KhaoSat0 from "./khao_sat0";
import KhaoSat1 from "./khao_sat1";
import KhaoSat2 from "./khao_sat2";
import KhaoSat3 from "./khao_sat3";
import KhaoSat4 from "./khao_sat4";
import KhaoSat5 from "./khao_sat5";
import KhaoSat6 from "./khao_sat6";
import KhaoSat7 from "./khao_sat7";
import HoanThanhKhaoSat from "./hoan-thanh-khao-sat";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import WarningIcon from "@mui/icons-material/Warning";
import MobileStepper from "@mui/material/MobileStepper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

let steps = [
  KhaoSat0,
  KhaoSat1,
  KhaoSat2,
  KhaoSat3,
  KhaoSat4,
  KhaoSat5,
  KhaoSat6,
  KhaoSat7,
  HoanThanhKhaoSat,
];

export default function KhaoSat() {
  const navigate = useNavigate();
  const [khaoSatPoint, setKhaoSatPoint] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [Points, setPoints] = useState(Array(steps.length).fill(null));
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleStartClick = () => {
    const newPoints = [...Points];
    newPoints[currentStep] = khaoSatPoint;
    setPoints(newPoints);

    setCurrentStep(currentStep + 1);
    setKhaoSatPoint("1");

    if (currentStep === 7) {
      setOpenModal(false);
    }
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const isLastStep = currentStep === steps.length - 1;

  return (
    <div className="bg-neutral-950 h-160 flex justify-center items-center">
      <div className="ml-20 bg-white h-128 w-256   ">
        <div className="h-4/5">
          {currentStep !== 0 && currentStep !== 8 && (
            <MobileStepper
              variant="progress"
              steps={8}
              position="static"
              activeStep={currentStep}
              disabled={currentStep === 0}
              sx={{
                backgroundColor: "#ECF2FE",
                "& .MuiLinearProgress-root": {
                  width: "100%",
                },
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#FF5500",
                },
              }}
            />
          )}

          {isLastStep ? (
            <HoanThanhKhaoSat />
          ) : currentStep === 0 ? (
            <KhaoSat0 setKhaoSatPoint={handleStartClick} />
          ) : currentStep === 1 ? (
            <KhaoSat1 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 2 ? (
            <KhaoSat2 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 3 ? (
            <KhaoSat3 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 4 ? (
            <KhaoSat4 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 5 ? (
            <KhaoSat5 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 6 ? (
            <KhaoSat6 setKhaoSatPoint={setKhaoSatPoint} />
          ) : currentStep === 7 ? (
            <KhaoSat7 setKhaoSatPoint={setKhaoSatPoint} />
          ) : (
            // <HomePage />
            navigate("/")
          )}
        </div>

        <div className="h-1/5 flex items-center justify-center bg-ys-lightblue">
          {currentStep !== 0 && currentStep !== 9 && (
            <div className="h-1/5 flex items-center justify-center bg-ys-lightblue">
              <Button
                variant="contained"
                startIcon={<ArrowLeftIcon style={{ fontSize: "18px" }} />}
                style={{
                  backgroundColor: "transparent",
                  color: "grey",
                  boxShadow: "0px 0px 0px rgba(0, 0, 0, 0) ",
                  fontWeight: "bold",
                  fontSize: "18px",
                  margin: "0 10px",
                }}
                onClick={handleBackClick}
              >
                Trở lại
              </Button>
              {currentStep !== 0 && currentStep !== 7 && (
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon style={{ fontSize: "18px" }} />}
                  style={{
                    backgroundColor: "#FF5500",
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "0 10px",
                  }}
                  onClick={() => handleStartClick()}
                >
                  Tiếp tục
                </Button>
              )}
              {currentStep === 7 && (
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon style={{ fontSize: "18px" }} />}
                  style={{
                    backgroundColor: "#FF5500",
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "0 10px",
                  }}
                  onClick={() => handleOpen()}
                >
                  Hoàn Thành
                </Button>
              )}
            </div>
          )}
        </div>
        <div>
          <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "36rem",
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <div className="flex justify-center">
                <WarningIcon style={{ fontSize: "150", color: "#FF5500" }} />
              </div>

              <h2 className=" text-ys-blue font-bold text-center">
                Bản khảo sát khẩu vị rủi ro chỉ cho phép cập nhật một quý một
                lần
              </h2>
              <p className=" text-gray-600 text-center">
                Bạn có chắc chắn với kết quả này?
              </p>
              <div className="flex justify-center mt-4">
                <Button
                  variant="contained"
                  startIcon={<ArrowLeftIcon style={{ fontSize: "18px" }} />}
                  style={{
                    backgroundColor: "transparent",
                    color: "grey",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0) ",
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "0 10px",
                  }}
                  onClick={handleClose}
                >
                  Trở lại
                </Button>

                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon style={{ fontSize: "18px" }} />}
                  style={{
                    backgroundColor: "#FF5500",
                    fontWeight: "bold",
                    fontSize: "14px",
                    margin: "0 10px",
                  }}
                  onClick={() => handleStartClick()}
                >
                  Tiếp tục
                </Button>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
}
