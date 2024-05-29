import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type Props = { CustomLeftYAxisTick: any; CustomRightYAxisTick: any; CustomXAxisTick: any };
export default function NguonVon(props: Props) {
    const { chartData } = useAppSelector((state: RootState) => state.stockRating);
    let { CustomLeftYAxisTick, CustomRightYAxisTick, CustomXAxisTick } = props;

    return (
        // <div className="w-1/3 p-2 aspect-square">
        //     <div className="rounded-md bg-[#111111] w-full aspect-square">
        //         <div className=" flex justify-center  ">
        //             <div className="text-[#A5ACBC] font-bold mt-4">NGUỒN VỐN (NĂM)</div>
        //         </div>

        //         <div style={{ width: '100%', height: '85%' }}>
        //             <ResponsiveContainer>
        //                 <ComposedChart
        //                     data={chartData.nguonVon?.slice()}
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
        //                         name="gfkdngfdkngdndlkfnsdf"
        //                         dataKey="TValue_short_trade_account_payable"
        //                         barSize={12}
        //                         fill="#034ea2"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="fsdknkdfmdfkmdfmsdlfsdlfmdsfmdslk"
        //                         dataKey="TValue_short_advances"
        //                         fill="#39c85e"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_trade_account_payable"
        //                         fill="#8554c7"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_von_cua_chu_so_huu"
        //                         fill="#ac5843"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_share_premium"
        //                         fill="#43a486"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_von_khac_cua_chu_so_huu"
        //                         fill="#43ac59"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_undistributed_earning_after_tax"
        //                         fill="#5433bc"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_short_loans"
        //                         fill="#f24064"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_loans"
        //                         fill="#b53201"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_unearned_revenue"
        //                         fill="#e62357"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_short_unearned_revenue"
        //                         fill="#a5a245"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_advances"
        //                         fill="#e7a2b0"
        //                         stackId="stack"
        //                         yAxisId="right"
        //                     />
        //                     <Bar
        //                         name="test"
        //                         dataKey="TValue_long_acrrued_expenses"
        //                         fill="#ab43cd"
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
                <div className="text-[#A5ACBC] font-bold mt-4">NGUỒN VỐN (NĂM)</div>
            </div>

            <div style={{ width: '100%', height: '85%' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={chartData.nguonVon?.slice()}
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
                            name="gfkdngfdkngdndlkfnsdf"
                            dataKey="TValue_short_trade_account_payable"
                            barSize={12}
                            fill="#034ea2"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="fsdknkdfmdfkmdfmsdlfsdlfmdsfmdslk"
                            dataKey="TValue_short_advances"
                            fill="#39c85e"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_long_trade_account_payable"
                            fill="#8554c7"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_von_cua_chu_so_huu"
                            fill="#ac5843"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_share_premium"
                            fill="#43a486"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_von_khac_cua_chu_so_huu"
                            fill="#43ac59"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_undistributed_earning_after_tax"
                            fill="#5433bc"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar name="test" dataKey="TValue_short_loans" fill="#f24064" stackId="stack" yAxisId="right" />
                        <Bar name="test" dataKey="TValue_long_loans" fill="#b53201" stackId="stack" yAxisId="right" />
                        <Bar
                            name="test"
                            dataKey="TValue_long_unearned_revenue"
                            fill="#e62357"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_short_unearned_revenue"
                            fill="#a5a245"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_long_advances"
                            fill="#e7a2b0"
                            stackId="stack"
                            yAxisId="right"
                        />
                        <Bar
                            name="test"
                            dataKey="TValue_long_acrrued_expenses"
                            fill="#ab43cd"
                            stackId="stack"
                            yAxisId="right"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
