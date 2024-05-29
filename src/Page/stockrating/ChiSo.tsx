import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './../../store/hook';
import { RootState } from './../../store';
import { stockRatingAct } from './Saga/stockRatingSlice';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { Select, InputLabel, FormControl, Table, TableBody, TableCell, TableRow, TableHead } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Loading from '../../component/loading';
import './style.css';
type Props = {};

export default function ChiSo({}: Props) {
    const dispatch = useAppDispatch();
    const { ReportTermType, Unit, PeriodYear, dataStockById, chartData } = useAppSelector(
        (state: RootState) => state.stockRating,
    );
    const StockCode = dataStockById?.StockCode;

    useEffect(() => {
        dispatch(
            stockRatingAct.getChartBienLoiNhuanRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
    }, [StockCode]);
    const test = finalElement(chartData.bienLoiNhuan?.slice());

    function finalElement(data: any) {
        console.log(data);

        data = data[data.length - 1];
        return data;
    }

    interface ThongTinCoBan {
        name: string;
        value: string | number;
    }

    const dataCol1: ThongTinCoBan[] = [
        { name: 'Nhóm Ngành', value: 'Nguyên vật liệu L1' },
        { name: 'Ngành', value: 'Hoá chất L3' },
        { name: 'GTGD', value: 1.527 },
        { name: 'KLGD (CP)', value: 55.0 },
        { name: 'Vốn hoá (Tỷ VND)', value: 26.88 },
        { name: 'SLCPLH (CP)', value: 3.88 },
        { name: 'Tỷ suất cổ tức', value: 8.08 },
        { name: 'KLTB 20 phiên', value: 25.08 },
        { name: 'Beta 6th (TTM)', value: 14.123 },
    ];

    const dataCol2: ThongTinCoBan[] = [
        { name: 'ROE (TTM)', value: 'Nguyên vật liệu L1' },
        { name: 'EPS (TTM)', value: 'Hoá chất L3' },
        { name: 'Tỷ lệ free float', value: 1.527 },
        { name: 'P/E(TTM)', value: 55.0 },
        { name: 'P/B', value: 26.88 },
        { name: 'P/S', value: 3.88 },
        { name: 'EV/EBITDA', value: 1 },
        { name: 'Giá trị DN (Tỷ VND)', value: 25.08 },
        { name: 'ROA (TTM)', value: 14.123 },
    ];

    return (
        <div className="flex gap-3">
            <div className="rounded-md h-auto bg-[#262626] w-[480px] p-4">
                <div className=" w-full h-[140px] mt-5">
                    <div className="flex justify-between gap-3">
                        <div className=" rounded-xl py-4 px-5 text-center bg-gradient-to-t from-[#187112] to-[#39C85E] drop-shadow-md">
                            <div className="text-sm text-white">STOCK RATING</div>
                            <div className="text-[50px] font-bold text-white">92</div>
                        </div>

                        <div className=" rounded-xl text-center py-5 px-1 w-[100px] h-[100px] bg-gradient-to-b from-[#0069B5] to-[#002F6F] drop-shadow-md ">
                            <div className="text-xs text-white">ĐIỂM CƠ BẢN</div>
                            <div className="text-4xl text-white">92</div>
                        </div>

                        <div className=" rounded-xl text-center py-5 px-[3px] w-[100px] h-[100px] bg-gradient-to-b from-[#0069B5] to-[#002F6F] drop-shadow-md">
                            <div className="text-xs text-white">SỨC MẠNH GIÁ</div>
                            <div className="text-4xl text-white">92</div>
                        </div>
                    </div>
                </div>

                <div className=" h-auto w-full flex items-center">
                    <div className="text-sm font-normal w-1/4 text-[#A5ACBC] ">Xu hướng ngắn hạn</div>
                    <div className="border-[1px] border-[#39C85E] w-2/5 h-[65px] rounded-full flex items-center justify-center">
                        <LightModeOutlinedIcon sx={{ fontSize: 50, color: '#39C85E' }} />
                    </div>
                    <div style={{ width: '45%' }} className="px-7">
                        <div className="font-normal text-sm" style={{ color: '#A5ACBC' }}>
                            Ngày
                        </div>
                        <div className="text-lg text-white">20/03/2023</div>
                    </div>
                </div>

                <div className=" flex items-center h-auto mt-2">
                    <div className="text-base w-1/4 text-[#A5ACBC]">Khuyến nghị</div>
                    <div className="w-[140px] h-10" style={{ width: '35%' }}>
                        <FormControl size="small" fullWidth>
                            <InputLabel sx={{ color: 'red', fontWeight: 700 }} id="demo-simple-select-label">
                                BÁN
                            </InputLabel>
                            <Select
                                disabled
                                IconComponent={() => <ArrowDropDownIcon sx={{ color: 'red' }} />}
                                sx={{ border: '1px solid red', height: 40 }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                            ></Select>
                        </FormControl>
                    </div>

                    <div className="pl-6 top-0 w-[140px]">
                        <div className="text-base" style={{ color: '#A5ACBC' }}>
                            Giá đóng cửa:
                        </div>
                        <div className="bg-black rounded h-8 flex items-center justify-center">
                            <div className="text-white">10,700</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-md bg-[#262626] w-[600px] px-5">
                <h2 className="text-lg font-semibold text-center py-4 text-white" style={{ fontFamily: 'Roboto' }}>
                    THÔNG TIN CƠ BẢN
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="">
                        <Table size="small" aria-label="simple table">
                            <TableHead>
                                <TableRow></TableRow>
                            </TableHead>
                            <TableBody>
                                {dataCol1?.map(({ name, value }) => {
                                    return (
                                        <TableRow
                                            sx={{
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                },
                                            }}
                                        >
                                            <TableCell
                                                sx={{ color: '#A5ACBC', fontSize: 12, padding: '4px 10px' }}
                                                component="td"
                                                align="right"
                                                scope="row"
                                            >
                                                {name}
                                            </TableCell>
                                            <TableCell
                                                sx={{ color: 'white', fontSize: 12, padding: '4px 0' }}
                                                component="td"
                                                align="left"
                                            >
                                                {value}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>

                    <div className="">
                        <Table size="small" aria-label="simple table">
                            <TableBody>
                                {dataCol2?.map(({ name, value }) => {
                                    return (
                                        <TableRow
                                            sx={{
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                                },
                                            }}
                                        >
                                            <TableCell
                                                sx={{ color: '#A5ACBC', fontSize: 12, padding: '4px 10px' }}
                                                component="td"
                                                align="right"
                                                scope="row"
                                            >
                                                {name}
                                            </TableCell>
                                            <TableCell
                                                sx={{ color: 'white', fontSize: 12, padding: '4px 0' }}
                                                component="td"
                                                align="left"
                                            >
                                                {value}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>

            <div className="rounded-md bg-[#262626] w-[500px] px-5">
                <h2 className="text-lg font-semibold text-center py-4 text-white" style={{ fontFamily: 'Roboto' }}>
                    THÔNG TIN CƠ BẢN
                </h2>
                <div className="">
                    <Table size="small" aria-label="simple table">
                        <TableHead>
                            <TableRow></TableRow>
                        </TableHead>
                        <TableBody>
                            {dataCol1?.map(({ name, value }) => {
                                return (
                                    <TableRow
                                        sx={{
                                            cursor: 'pointer',
                                            '&:hover': {
                                                backgroundColor: 'rgba(255,255,255,0.1)',
                                            },
                                        }}
                                    >
                                        <TableCell
                                            sx={{ color: '#A5ACBC', fontSize: 12, padding: '4px 10px' }}
                                            component="td"
                                            align="right"
                                            scope="row"
                                        >
                                            {name}
                                        </TableCell>
                                        <TableCell
                                            sx={{ color: 'white', fontSize: 12, padding: '4px 0' }}
                                            component="td"
                                            align="left"
                                        >
                                            {value}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
}
