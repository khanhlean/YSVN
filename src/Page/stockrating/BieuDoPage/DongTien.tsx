import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type Props = { CustomLeftYAxisTick: any; CustomRightYAxisTick: any; CustomXAxisTick: any };
export default function DongTien(props: Props) {
    const { chartData } = useAppSelector((state: RootState) => state.stockRating);
    let { CustomLeftYAxisTick, CustomRightYAxisTick, CustomXAxisTick } = props;

    return (
        // <div className="w-1/3 p-2 aspect-square">
        //     <div className="rounded-md bg-[#111111] w-full aspect-square">
        //         <div className=" flex justify-center  ">
        //             <div className="text-[#A5ACBC] font-bold mt-4">DÒNG TIỀN (NĂM)</div>
        //         </div>

        //         <div style={{ width: '100%', height: '85%' }}>
        //             <ResponsiveContainer>
        //                 <ComposedChart
        //                     data={chartData.dongTien?.slice()}
        //                     stackOffset="sign"
        //                     margin={{
        //                         top: 40,
        //                         right: 20,
        //                         bottom: 20,
        //                         left: 20,
        //                     }}
        //                 >
        //                     <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
        //                     <XAxis dataKey="YearPeriod" tickMargin={10} axisLine={false} fontSize={12} />
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

        //                     <Bar
        //                         name="Lưu chuyển tiền thuần từ hoạt động đầu tư"
        //                         dataKey="TValueCashFlowInvesting"
        //                         barSize={12}
        //                         fill="#034ea2"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="Lưu chuyển tiền thuần từ hoạt động kinh doanh"
        //                         dataKey="TValueCashFlowOperation"
        //                         fill="#39c85e"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />

        //                     <Bar
        //                         name="Lưu chuyển tiền thuần từ hoạt động tài chính"
        //                         dataKey="TValueCashFlowFinance"
        //                         fill="#e76224"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Line
        //                         name="Tiền và tương đương tiền cuối kỳ"
        //                         dataKey="TValueCashFlowFinance"
        //                         stroke="#a5acbc"
        //                         strokeWidth={2}
        //                         yAxisId="right"
        //                         dot={false}
        //                     />
        //                 </ComposedChart>
        //             </ResponsiveContainer>
        //         </div>
        //     </div>
        // </div>
        <div className="rounded-md bg-[#111111] w-full aspect-square">
            <div className=" flex justify-center  ">
                <div className="text-[#A5ACBC] font-bold mt-4">DÒNG TIỀN (NĂM)</div>
            </div>

            <div style={{ width: '100%', height: '85%' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={chartData.dongTien?.slice()}
                        stackOffset="sign"
                        margin={{
                            top: 40,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
                        <XAxis dataKey="YearPeriod" tickMargin={10} axisLine={false} fontSize={12} />
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

                        <Bar
                            name="Lưu chuyển tiền thuần từ hoạt động đầu tư"
                            dataKey="TValueCashFlowInvesting"
                            barSize={12}
                            fill="#034ea2"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="Lưu chuyển tiền thuần từ hoạt động kinh doanh"
                            dataKey="TValueCashFlowOperation"
                            fill="#39c85e"
                            stackId="stack"
                            yAxisId="right"
                        />

                        <Bar
                            name="Lưu chuyển tiền thuần từ hoạt động tài chính"
                            dataKey="TValueCashFlowFinance"
                            fill="#e76224"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Line
                            name="Tiền và tương đương tiền cuối kỳ"
                            dataKey="TValueCashFlowFinance"
                            stroke="#a5acbc"
                            strokeWidth={2}
                            yAxisId="right"
                            dot={false}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}