// import "./styles.css";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line
} from "recharts";

const data = [
  {
    name: "t1",
    uv: 0,
    pv: 0,
  },
  {
    name: "t2",
    uv: 50,
    pv: 30,
  },
  {
    name: "t3",
    uv: 50,
    pv: 20,
  },
  {
    name: "t4",
    uv: 40,
    pv: 10,
  },
  {
    name: "t5",
    uv: 50,
    pv: 30,
  },
  {
    name: "t6",
    uv: 60,
    pv: 50,
  },
  {
    name: "t7",
    uv: 70,
    pv: 42,
  },
  {
    name: "t8",
    uv: 50,
    pv: 60,
  },
  {
    name: "t9",
    uv: 60,
    pv: 70,
  },
  {
    name: "t10",
    uv: 50,
    pv: 66,
  },
  {
    name: "t11",
    uv: 20,
    pv: 40,
  },
  {
    name: "t12",
    uv: 10,
    pv: 22,
  }
];

export default function Chart0() {
  return (
    <>
      <div className="mt-3 ">
        <AreaChart
          width={1340}
          height={380}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -20,
          }}
        >
          <CartesianGrid y={100000} strokeDasharray="" stroke={"rgba(128,128,128,0.3)"} />
          <XAxis height={50} tickSize={20} tickLine={false} padding={{ left: 60 }} dataKey="name" />
          <YAxis
            type="number"
            tickLine={false}
            tickCount={9}
            domain={[0, 80]}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip />
          <Area
            type="linear"
            dataKey="uv"
            stroke="#8884d8"
            fill={"#008dbd"}
          />
          <Area
            type="linear"
            dataKey="pv"
            stroke="orange"
            fill="none"
            strokeWidth={2}
            activeDot={{ stroke: "red", strokeWidth: 2, r: 4 }}
          />
        </AreaChart>
      </div>
    </>
  );
}