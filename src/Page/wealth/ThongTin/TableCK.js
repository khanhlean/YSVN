export default function TableCK() {
  const data = [
    {
      maCK: "FPT",
      banDau: "91.000",
      hienTai: "92.200",
      thayDoi: "1.21%",
      khoiLuong: 1000,
      giaTT: "60.724.479",
      color: "#8e44ad",
    },
    {
      maCK: "MBB",
      banDau: "91.000",
      hienTai: "92.200",
      thayDoi: "1.21%",
      khoiLuong: 1000,
      giaTT: "60.724.479",
      color: "#3498db",
    },
    {
      maCK: "TNH",
      banDau: "91.000",
      hienTai: "92.200",
      thayDoi: "1.21%",
      khoiLuong: 1000,
      giaTT: "60.724.479",
      color: "#1abc9c",
    },
    {
      maCK: "SMC",
      banDau: "91.000",
      hienTai: "92.200",
      thayDoi: "1.21%",
      khoiLuong: 1000,
      giaTT: "60.724.479",
      color: "#f1c40f",
    },
    {
      maCK: "DPM",
      banDau: "91.000",
      hienTai: "92.200",
      thayDoi: "1.21%",
      khoiLuong: 1000,
      giaTT: "60.724.479",
      color: "#e67e22",
    },
    {
      maCK: "Tiền mặt",
      banDau: "",
      hienTai: "",
      thayDoi: "",
      khoiLuong: null,
      giaTT: "60.724.479",
      color: "#e74c3c",
    },
  ];

  return (
    <div className="p-4 bg-[#000e29] h-[340px] w-[665px] rounded-lg">
      <div className="grid grid-rows-9 ">
        <div className="row-span-2 ">
          <div className=" w-full grid grid-cols-5 gap-2 text-white text-xs">
            <div className=" w-full grid items-center bg-[#0a1d42] justify-center text-xs">
              Mã CK
            </div>
            <div className="col-span-2 w-full text-center bg-[#0a1d42] px-3">
              <div className="py-1 border-b-[1px] border-b-gray-400 text-xs">
                Giá cổ phiếu (%)
              </div>
              <div className="flex justify-between items-end py-2">
                <div className="text-xs">Ban đầu</div>
                <div className="text-xs">Ban đầu</div>
                <div className="text-xs">Ban đầu</div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#0a1d42" }}
              className=" w-full grid items-center justify-center"
            >
              Khối lượng
            </div>
            <div
              style={{ backgroundColor: "#0a1d42" }}
              className=" w-full grid items-center justify-center"
            >
              Giá trị TT tài sản
            </div>
          </div>
        </div>

        {data.map((item, index) => {
          return (
            <div className="row-span-1 h-9">
              <div
                style={{
                  backgroundColor: `${index % 2 === 0 ? "#000e29" : "#0c1f45"}`,
                }}
                className=" w-full h-full grid grid-cols-5 gap-2 text-white items-center"
              >
                <div className=" w-full flex">
                  <div
                    style={{ backgroundColor: `${item.color}` }}
                    className="p-3 mx-3 rounded"
                  ></div>
                  <div>{item.maCK}</div>
                </div>
                <div className="col-span-2 w-full text-center">
                  <div className="flex justify-between px-5">
                    <div>{item.banDau}</div>
                    <div>{item.hienTai}</div>
                    <div className="text-green-700">{item.thayDoi}</div>
                  </div>
                </div>
                <div className=" w-full grid justify-end pr-3 text-green-700">
                  {item.khoiLuong}
                </div>
                <div className=" w-full grid justify-end pr-3 text-green-700">
                  {item.giaTT}
                </div>
              </div>
            </div>
          );
        })}

        <div className="row-span-1 h-10">
          <div className=" w-full h-full grid grid-cols-5 gap-2 text-white items-center">
            <div
              style={{ backgroundColor: "#000e29" }}
              className=" w-full flex"
            ></div>
            <div
              style={{ backgroundColor: "#000e29" }}
              className="col-span-2 w-full text-center"
            >
              <div className="flex justify-between items-center py-2 pr-5">
                <div className="relative text-sm">Tổng giá trị hiện tại</div>
                <div className="text-green-700 text-xl">1.21%</div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#000e29" }}
              className=" w-full grid justify-end pr-3 text-green-700"
            ></div>
            <div
              style={{ backgroundColor: "#000e29" }}
              className=" w-full grid justify-end pr-3 text-green-700 text-xl"
            >
              60.724.479
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
