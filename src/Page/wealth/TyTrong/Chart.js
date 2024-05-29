import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const data = [
    { name: "Group A", value: 400, color: "#0088FE" },
    { name: "Group B", value: 300, color: "#00C49F" },
    { name: "Group C", value: 300, color: "#FFBB28" },
    { name: "Group D", value: 200, color: "#FF8042" },
    { name: "Group E", value: 100, color: "#FFBB28" },
];

export default function ChartTT() {
    return (
        <>
            <div className="flex items-center">
                <PieChart width={300} height={300}>
                    <Pie
                        data={data}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                </PieChart>


            </div>
            <div className=" justify-center items-center w-auto ml-6 h-auto">
                {data.map(({ name, color }, index) => {
                    return <div key={index} className=' w-full flex my-4'>
                        <div style={{ backgroundColor: `${color}` }} className='p-3 mx-3 rounded'></div>
                        <div className="text-white">{name}</div>
                    </div>
                })}
            </div>
        </>
    );
}