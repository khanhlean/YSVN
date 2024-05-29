import { useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts';

type Props = { CustomLeftYAxisTick: any; CustomRightYAxisTick: any; CustomXAxisTick: any };
export default function BienLoiNhuan(props: Props) {
    const { chartData } = useAppSelector((state: RootState) => state.stockRating);
    let { CustomLeftYAxisTick, CustomRightYAxisTick, CustomXAxisTick } = props;

    return (
        <div className="rounded-md bg-[#111111] w-full aspect-square">
            <div className=" flex justify-center  ">
                <div className="text-[#A5ACBC] font-bold mt-4">BIÊN LỢI NHUẬN (QUÝ)</div>
            </div>

            <div style={{ width: '100%', height: '85%' }}>
                <ResponsiveContainer>
                    <ComposedChart
                        data={chartData.bienLoiNhuan?.slice()}
                        margin={{
                            top: 40,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#576072" horizontal={true} vertical={false} />
                        <XAxis dataKey="TermCode" tickMargin={10} axisLine={false} fontSize={12} />
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
                        <Line
                            name="Biên lợi nhuận gộp"
                            type="monotone"
                            dataKey="TValueGrossProfitMargin"
                            stroke="#e26ef8"
                            strokeWidth={2}
                            yAxisId="right"
                            dot={false}
                        />
                        <Line
                            name="Tỷ lệ lãi EBITDA"
                            type="monotone"
                            dataKey="TValueEbitdaMargin"
                            stroke="#ffad0d"
                            strokeWidth={2}
                            yAxisId="right"
                            dot={false}
                        />
                        <Line
                            name="Tỷ suất sinh lợi trên doanh thu thuần"
                            type="monotone"
                            dataKey="TValueNetProfitMargin"
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
