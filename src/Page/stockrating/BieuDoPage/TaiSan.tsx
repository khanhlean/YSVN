import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type Props = { CustomLeftYAxisTick: any; CustomRightYAxisTick: any; CustomXAxisTick: any };
export default function TaiSan(props: Props) {
    const { chartData } = useAppSelector((state: RootState) => state.stockRating);
    let { CustomLeftYAxisTick, CustomRightYAxisTick, CustomXAxisTick } = props;

    return (
        // <div className="w-1/3 p-2 aspect-square">
        //     <div className="rounded-md bg-[#111111] w-full aspect-square">
        //         <div className=" flex justify-center  ">
        //             <div className="text-[#A5ACBC] font-bold mt-4">TÀI SẢN (NĂM)</div>
        //         </div>

        //         <div style={{ width: '100%', height: '85%' }}>
        //             <ResponsiveContainer>
        //                 <ComposedChart
        //                     data={chartData.taiSan?.slice()}
        //                     stackOffset="sign"
        //                     margin={{
        //                         top: 40,
        //                         right: 20,
        //                         bottom: 20,
        //                         left: 20,
        //                     }}
        //                 >
        //                     <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
        //                     <XAxis dataKey="time" tickMargin={10} axisLine={false} fontSize={12} />
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
        //                         name="test"
        //                         dataKey="TValue_cash"
        //                         barSize={12}
        //                         fill="#034ea2"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_short_invest"
        //                         fill="#39c85e"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />

        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_short_receivable"
        //                         fill="#8554c7"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_inventory"
        //                         fill="#ac5843"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_short_other_asset"
        //                         fill="#43a486"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_receivable"
        //                         fill="#43ac59"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_fixAsset_total"
        //                         fill="#5433bc"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_invest_properties"
        //                         fill="#f24064"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="couTValue_long_financial_investnt9"
        //                         fill="#b53201"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar name="test" dataKey="TValue_goodwill" fill="#e62357" stackId="stack" yAxisId="right" />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_other_asset"
        //                         fill="#a5a245"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_other_asset_in_progress"
        //                         fill="#e7a2b0"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                 </ComposedChart>
        //             </ResponsiveContainer>
        //         </div>
        //     </div>
        // </div>
        <div className="rounded-md bg-[#111111] w-full aspect-square">
            <div className=" flex justify-center  ">
                <div className="text-[#A5ACBC] font-bold mt-4">TÀI SẢN (NĂM)</div>
            </div>

            <div style={{ width: '100%', height: '85%' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={chartData.taiSan?.slice()}
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
                            name="test"
                            dataKey="TValue_cash"
                            barSize={12}
                            fill="#034ea2"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar name="test" dataKey="TValue_short_invest" fill="#39c85e" stackId="stack" yAxisId="right" />

                        <Bar
                            name="test"
                            dataKey="TValue_short_receivable"
                            fill="#8554c7"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar name="test" dataKey="TValue_inventory" fill="#ac5843" stackId="stack" yAxisId="right" />
                        <Bar
                            name="test"
                            dataKey="TValue_short_other_asset"
                            fill="#43a486"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_long_receivable"
                            fill="#43ac59"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_fixAsset_total"
                            fill="#5433bc"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_invest_properties"
                            fill="#f24064"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="couTValue_long_financial_investnt9"
                            fill="#b53201"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar name="test" dataKey="TValue_goodwill" fill="#e62357" stackId="stack" yAxisId="right" />
                        <Bar
                            name="test"
                            dataKey="TValue_long_other_asset"
                            fill="#a5a245"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_long_other_asset_in_progress"
                            fill="#e7a2b0"
                            stackId="stack"
                            yAxisId="right"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
