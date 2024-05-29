import React from "react";
import { Tab, Tabs } from "@mui/material";
import { Button, Select, Typography } from "antd";
import { CaretDownOutlined, FileSearchOutlined } from "@ant-design/icons";
import Chart0 from "./ChartDB";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Typography>{children}</Typography>}
    </div>
  );
}

export default function DienBien() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="pl-5 pr-6">
        <div className="rounded-lg h-auto p-6 bg-[#000e29]">
          <div className="text-xl text-gray-400 font-bold">
            DIỄN BIẾN DANH MỤC SO VỚI INDEX (%)
          </div>

          <div className="flex justify-between items-center my-3">
            <div className="flex items-center">
              <div className="text-base text-gray-400 font-bold mr-3">
                CHỌN CHỈ SỐ SO SÁNH
              </div>
              <Select
                className="mr-3 w-[180px]"
                defaultValue="1"
                suffixIcon={
                  <CaretDownOutlined className="text-base text-blue-500" />
                }
                options={[
                  {
                    value: "1",
                    label: (
                      <div className="text-blue-500 font-bold text-base">
                        UPCOM INDEX
                      </div>
                    ),
                  },
                ]}
              />
              <div className="flex items-center">
                <div className="px-5 h-4 bg-blue-500 ml-10 mr-3"></div>
                <div className="text-gray-400">Danh mục</div>
              </div>
              <div className="flex items-center">
                <div className="px-4 bg-orange-500 h-1 ml-10 mr-3"></div>
                <div className="text-gray-400">VNINDEX</div>
              </div>
            </div>

            <div className="flex items-center">
              <div className=" flex items-center">
                <div className="text-base text-gray-500 mx-3">Từ</div>
                <Select
                  className=" w-[180px]"
                  defaultValue="1"
                  suffixIcon={
                    <CaretDownOutlined className="text-base text-blue-500" />
                  }
                  options={[
                    {
                      value: "1",
                      label: (
                        <div className="text-blue-500 font-bold text-base">
                          UPCOM INDEX
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
              <div className=" flex items-center">
                <div className="text-base text-gray-500 mx-3">Đến</div>
                <Select
                  className=" w-[180px]"
                  defaultValue="1"
                  suffixIcon={
                    <CaretDownOutlined className="text-base text-blue-500" />
                  }
                  options={[
                    {
                      value: "1",
                      label: (
                        <div className="text-blue-500 font-bold text-base">
                          UPCOM INDEX
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
              <div className="flex items-center bg-blue-600 rounded-lg ml-4 cursor-pointer">
                <Button
                  className="text-white  bg-none border-none"
                  icon={<FileSearchOutlined className="text-white text-base" />}
                >
                  Lọc
                </Button>
              </div>
            </div>
          </div>

          <CustomTabPanel value={value} index={0}>
            <Chart0 />
          </CustomTabPanel>

          <div className="mt-3 flex items-center">
            <Tabs
              indicatorColor="none"
              value={value}
              onChange={handleChange}
              sx={{ minHeight: 30 }}
              aria-label="simple tabs example"
            >
              <Tab
                style={{ borderBottom: `${value === 0 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="Zoom"
                {...a11yProps(0)}
              />
              <Tab
                style={{ borderBottom: `${value === 1 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="Kỳ gần nhất"
                {...a11yProps(1)}
              />
              <Tab
                style={{ borderBottom: `${value === 2 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="3M"
                {...a11yProps(2)}
              />
              <Tab
                style={{ borderBottom: `${value === 3 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="6M"
                {...a11yProps(3)}
              />
              <Tab
                style={{ borderBottom: `${value === 4 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="12M"
                {...a11yProps(4)}
              />
              <Tab
                style={{ borderBottom: `${value === 5 ? "1px solid" : ""}` }}
                sx={{
                  color: "white",
                  padding: 0,
                  margin: "0",
                  minHeight: "10px",
                  margin: "0 20px",
                  minWidth: "auto",
                }}
                label="Tất cả"
                {...a11yProps(5)}
              />
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
