import React from "react";
import "./style.css";

import TabControlls from "./TabControlls";

type Props = {};

export default function Body4({}: Props) {
  return (
    <div>
      <div className="mt-2 ">
        <TabControlls />
      </div>

      {/* <div style={{ height: 3707, backgroundColor: "#262626", width: "100%", marginTop: "20px" }} className='p-6'>
                <div className='flex justify-around'>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Biểu đồ
                    </div>
                    <div className='my-active mx-4 hover:cursor-pointer'>
                        BCTC Tóm tắt
                    </div>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Cân đối kế toán
                    </div>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Kết quả kinh doanh
                    </div>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Lưu chuyển tiền tệ
                    </div>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Chỉ số tài chính
                    </div>
                    <div className='title__off mx-4 hover:cursor-pointer'>
                        Chi tiêu kế hoạch
                    </div>
                </div>
                <hr />

                <div className='flex my-5 justify-between items-center'>
                    <div className='flex items-center h-full'>

                        <FormControl>
                            <InputLabel id="demo-simple-select-label" sx={{ color: "#A5ACBC" }}>Cũ đến mới</InputLabel>
                            <Select
                                open={false}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{ border: "1px solid #A5ACBC", width: 206 }}
                                IconComponent={() => (<ArrowDropDownIcon sx={{ color: '#A5ACBC' }} />)}
                            >
                            </Select>
                        </FormControl>


                        <FormControl sx={{ margin: "0 20px" }}>
                            <InputLabel id="demo-simple-select-label" sx={{ color: "#A5ACBC" }}>5 kỳ</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{ border: "1px solid #A5ACBC", width: 107 }}
                                IconComponent={() => (<ArrowDropDownIcon sx={{ color: '#A5ACBC' }} />)}
                            >
                            </Select>
                        </FormControl>

                        <FormControl sx={{ margin: "0 20px" }}>
                            <InputLabel id="demo-simple-select-label" sx={{ color: "#A5ACBC" }}>Quý</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{ border: "1px solid #A5ACBC", width: 107 }}
                                IconComponent={() => (<ArrowDropDownIcon sx={{ color: '#A5ACBC' }} />)}
                            >
                            </Select>
                        </FormControl>

                        <FormControl sx={{ margin: "0 20px" }}>
                            <InputLabel id="demo-simple-select-label" sx={{ color: "#A5ACBC" }}>Tỷ đồng</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={{ border: "1px solid #A5ACBC", width: 107 }}
                                IconComponent={() => (<ArrowDropDownIcon sx={{ color: '#A5ACBC' }} />)}
                            >
                            </Select>
                        </FormControl>

                        <Button className='hover:!bg-blue-800' sx={{ color: "white", backgroundColor: "#164194", height: "58px", padding: "0 20px" }} endIcon={<FileDownloadIcon sx={{ color: "white" }} />}>Tải file Excel</Button>
                        <Button className='hover:!bg-blue-800' sx={{ color: "white", backgroundColor: "#164194", height: "58px", padding: "0 20px", margin: "0 20px" }} endIcon={<FileDownloadIcon sx={{ color: "white" }} />}>Truy xuất nâng cao</Button>
                    </div>
                    <div className='h-10 flex item-center'>
                        <SkipPreviousIcon sx={{ color: "white", borderRadius: "50%", backgroundColor: "#164194", margin: "0 8px", width: 30, height: 30, padding: "5px" }} />
                        <ArrowBackIosNewIcon sx={{ color: "white", borderRadius: "50%", backgroundColor: "#164194", margin: "0 8px", width: 30, height: 30, padding: "5px" }} />
                        <ArrowForwardIosIcon sx={{ color: "white", borderRadius: "50%", backgroundColor: "#164194", margin: "0 8px", width: 30, height: 30, padding: "5px" }} />
                        <SkipNextIcon sx={{ color: "white", borderRadius: "50%", backgroundColor: "#164194", margin: "0 8px", width: 30, height: 30, padding: "5px" }} />
                    </div>

                </div>

                <KQKDTable />

                <CDKTTable />
            </div> */}
    </div>
  );
}
