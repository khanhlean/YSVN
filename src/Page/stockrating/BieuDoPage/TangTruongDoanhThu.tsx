import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type Props = { CustomLeftYAxisTick: any; CustomRightYAxisTick: any; CustomXAxisTick: any };
export default function TangTruongDoanhThu(props: Props) {
    const { chartData } = useAppSelector((state: RootState) => state.stockRating);
    let { CustomLeftYAxisTick, CustomRightYAxisTick, CustomXAxisTick } = props;

    return (
        // <div className="w-1/3 p-2 aspect-square">
        //     <div className="rounded-md bg-[#111111] w-full aspect-square ">
        //         <div className=" flex justify-center  ">
        //             <div className="text-[#A5ACBC] font-bold mt-4">TĂNG TRƯỞNG DOANH THU (QUÝ)</div>
        //         </div>

        //         <div style={{ width: '100%', height: '85%' }}>
        //             <ResponsiveContainer>
        //                 <ComposedChart
        //                     data={chartData.tangTruongDoanhThu?.slice()}
        //                     margin={{
        //                         top: 40,
        //                         right: 20,
        //                         bottom: 20,
        //                         left: 20,
        //                     }}
        //                 >
        //                     <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
        //                     <XAxis
        //                         dataKey="YearPeriod"
        //                         key="TermCode"
        //                         tickMargin={10}
        //                         axisLine={false}
        //                         fontSize={12}
        //                         tick={<CustomXAxisTick />}
        //                     />
        //                     <YAxis yAxisId="left" axisLine={false} tickMargin={5} tick={<CustomLeftYAxisTick />} />
        //                     <YAxis
        //                         yAxisId="right"
        //                         orientation="right"
        //                         axisLine={false}
        //                         tickMargin={5}
        //                         tick={<CustomRightYAxisTick />}
        //                     />
        //                     <Tooltip
        //                         contentStyle={{
        //                             backgroundColor: 'rgba(0,0,0,0.9)',
        //                             borderColor: 'rgba(0,0,0,0.9)',
        //                             backdropFilter: 'blur(5px)',
        //                             borderRadius: '3px',
        //                             whiteSpace: 'normal',
        //                             maxWidth: '400px',
        //                             fontSize: '14px',
        //                         }}
        //                     />
        //                     <Legend height={50} wrapperStyle={{ overflowY: 'scroll' }} />
        //                     <Bar name="Doanh thu thuần" dataKey="TValue" barSize={12} fill="#39c85e" yAxisId="left" />
        //                     <Line
        //                         name="Tăng trưởng doanh thu thuần"
        //                         type="monotone"
        //                         dataKey="TValueNetProfitMargin"
        //                         stroke="#a5acbc"
        //                         strokeWidth={2}
        //                         dot={false}
        //                         yAxisId="right"
        //                     />
        //                 </ComposedChart>
        //             </ResponsiveContainer>
        //         </div>
        //     </div>
        // </div>

        <div className="rounded-md bg-[#111111] w-full aspect-square ">
            <div className=" flex justify-center  ">
                <div className="text-[#A5ACBC] font-bold mt-4">TĂNG TRƯỞNG DOANH THU (QUÝ)</div>
            </div>

            <div style={{ width: '100%', height: '85%' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={chartData.tangTruongDoanhThu?.slice()}
                        margin={{
                            top: 40,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
                        <XAxis
                            dataKey="YearPeriod"
                            key="TermCode"
                            tickMargin={10}
                            axisLine={false}
                            fontSize={12}
                            tick={<CustomXAxisTick />}
                        />
                        <YAxis yAxisId="left" axisLine={false} tickMargin={5} tick={<CustomLeftYAxisTick />} />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            axisLine={false}
                            tickMargin={5}
                            tick={<CustomRightYAxisTick />}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'rgba(0,0,0,0.9)',
                                borderColor: 'rgba(0,0,0,0.9)',
                                backdropFilter: 'blur(5px)',
                                borderRadius: '3px',
                                whiteSpace: 'normal',
                                maxWidth: '400px',
                                fontSize: '14px',
                            }}
                        />
                        <Legend height={50} wrapperStyle={{ overflowY: 'scroll' }} />
                        <Bar name="Doanh thu thuần" dataKey="TValue" barSize={12} fill="#39c85e" yAxisId="left" />
                        <Line
                            name="Tăng trưởng doanh thu thuần"
                            type="monotone"
                            dataKey="TValueNetProfitMargin"
                            stroke="#a5acbc"
                            strokeWidth={2}
                            dot={false}
                            yAxisId="right"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
