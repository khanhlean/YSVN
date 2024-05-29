import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function PhanBoTyTrong() {
  const data = [
    {
      name: "Hiện tại",
      FPT: 59,
      MBB: 20,
      TNH: 21,
      SMC: 20,
      DPM: 10,
      TienMat: 10,
    },
    {
      name: "Ban đầu",
      FPT: 59,
      MBB: 20,
      TNH: 21,
      SMC: 20,
      DPM: 10,
      TienMat: 10,
    },
  ];

  return (
    <div className=" bg-[#000e29] rounded-lg h-[340px] w-[400px] text-white ">
      <div className=" text-gray-400 mx-6 mt-4 text-lg">
        PHÂN BỐ TỶ TRỌNG ĐẦU TƯ
      </div>
      <div>
        <BarChart
          width={370}
          height={300}
          data={data}
          // maxBarSize={120}
          stackOffset="expand"
          margin={{
            top: 20,
            right: 15,
            left: -5,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray=""
            y={100000}
            stroke={"rgba(128,128,128,0.3)"}
          />
          <XAxis
            padding={{ left: 40, right: 20 }}
            dataKey="name"
            tickLine={false}
          />
          <YAxis
            tickLine={false}
            type="number"
            tickCount={6}
            tickFormatter={(value, index) => value * 100}
          />
          <Tooltip />
          <Bar dataKey="FPT" stackId="a" fill="#8e44ad" />
          <Bar dataKey="MBB" stackId="a" fill="#3498db" />
          <Bar dataKey="TNH" stackId="a" fill="#1abc9c" />
          <Bar dataKey="SMC" stackId="a" fill="#f1c40f" />
          <Bar dataKey="DPM" stackId="a" fill="#e67e22" />
          <Bar dataKey="TienMat" stackId="a" fill="#e74c3c" />
        </BarChart>
      </div>
    </div>
  );
}
