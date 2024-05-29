import {
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Table,
    Paper,
    Tooltip,
    Button,
} from '@mui/material';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import React, { useEffect, useMemo, useState } from 'react';
import './style.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Row, Skeleton } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { stockRatingAct } from './Saga/stockRatingSlice';
import { RootState } from '../../store';
import moment from 'moment';

type Props = {
    Unit: number;
    PageSize: number;
    ReportTermType: number;
    ReportType: string;
    StockCode: string;
    Ordering: string;
};

export default function KQKDPage(props: Props) {
    const dispatch = useAppDispatch();
    const { Unit, StockCode, PageSize, ReportTermType, ReportType, Ordering } = props;
    const { loading, dataGetCrr, dataGetFinance, error } = useAppSelector((state: RootState) => state.stockRating);
    const [state, setState] = useState(true);
    const [colHover, setColHover]: any = useState('');
    const [classFixed, setClassFixed]: any = useState(false);
    const classHoverCol = 'classHoverCol';

    let [row2, setRow2] = useState<any>([]);

    // useEffect(() => {
    //     const d: any = {
    //         StockCode: 'ACB',
    //         ReportTermType: 1,
    //         Unit: '1000000',
    //         PageIndex: 1,
    //         PageSize: 1,
    //         ReportType: 'BCTC',
    //     };
    //     dispatch(stockRatingAct.getFinanceInformationRequest(d));
    // }, []);

    useEffect(() => {
        setRow2(dataGetCrr);
    }, [dataGetCrr, PageSize, ReportTermType, Ordering, ReportType]);

    useEffect(() => {
        const handleScroll = () => {
            setClassFixed(window.scrollY >= 930);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    console.log('PageSize: ', PageSize);

    return (
        <>
            {loading ? (
                <Skeleton.Input className="!w-full !h-96 rounded bg-gray-500" active />
            ) : (
                <table id="myTable" className="table-auto w-full border-y border-gray-300">
                    <thead className="">
                        <tr
                            className={`w-full h-[50px] leading-[50px] will-change-scroll bg-black top-0 mx-auto max-w-[1371px] ${
                                classFixed ? 'fixed' : ''
                            }`}
                        >
                            <th className="text-white w-[300px] max-w-[300px] pl-4" align="left">
                                BÁO CÁO TÀI CHÍNH - {StockCode}
                            </th>
                            <th className="w-auto"></th>
                            <th className="w-auto"></th>
                            <th className="min-w-[1100px] " align="right">
                                {row2?.map((a: any) => {
                                    return (
                                        <>
                                            <th className="text-white w-[170px] px-6" align="center">
                                                {ReportTermType === 2
                                                    ? a?.termcode
                                                        ? `${a?.termcode}/${a?.yearperiod}`
                                                        : ''
                                                    : a.yearperiod}
                                                &nbsp;
                                            </th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>
                    </thead>

                    {state ? (
                        <tbody className="w-full ">
                            <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300">
                                <td className=" w-[300px] pl-4">Giai đoạn</td>
                                <td className="w-auto">
                                    <Tooltip title="..." placement="top">
                                        <ErrorOutlineOutlinedIcon />
                                    </Tooltip>
                                </td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    {row2?.map((a: any, index: any) => {
                                        return (
                                            <>
                                                <td
                                                    key={index}
                                                    align="center"
                                                    className={`w-[170px] h-[40px] px-6' index ${
                                                        colHover === index ? 'classHoverCol' : ''
                                                    }`}
                                                    onMouseEnter={() => setColHover(index)}
                                                    onMouseLeave={() => setColHover('')}
                                                >
                                                    {moment(a?.PeriodBegin, 'YYYYMM').format('MM/YY')} -{' '}
                                                    {moment(a?.PeriodEnd, 'YYYYMM').format('MM/YY')}
                                                </td>
                                            </>
                                        );
                                    })}
                                </td>
                            </tr>

                            <tr className="w-full  h-[40px]  border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300">
                                <td className=" w-[300px] pl-4">Hợp nhất</td>
                                <td className="w-auto">
                                    <Tooltip title="..." placement="top">
                                        <ErrorOutlineOutlinedIcon />
                                    </Tooltip>
                                </td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    {row2?.map((a: any, index: any) => {
                                        return (
                                            <>
                                                <td
                                                    align="center"
                                                    className={`w-[170px] h-[40px] px-6'  index ${
                                                        colHover === index ? 'classHoverCol' : ''
                                                    }`}
                                                    onMouseEnter={() => setColHover(index)}
                                                    onMouseLeave={() => setColHover('')}
                                                >
                                                    {a.United === 'HN' ? 'Hợp nhất' : ''}
                                                </td>
                                            </>
                                        );
                                    })}
                                </td>
                            </tr>

                            <tr className="w-full h-[40px] text-md border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                                <td className=" w-[300px] pl-4">Kiểm toán</td>
                                <td className="w-auto">
                                    <Tooltip title="..." placement="top">
                                        <ErrorOutlineOutlinedIcon />
                                    </Tooltip>
                                </td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    {row2?.map((a: any, index: any) => {
                                        return (
                                            <>
                                                <td
                                                    align="center"
                                                    className={`w-[170px] px-6' h-[40px] index ${
                                                        colHover === index ? 'classHoverCol' : ''
                                                    }`}
                                                    onMouseEnter={() => setColHover(index)}
                                                    onMouseLeave={() => setColHover('')}
                                                >
                                                    {a.AuditedStatus === 'KT'
                                                        ? 'Kiểm toán'
                                                        : a.AuditedStatus === 'CKT'
                                                        ? 'Chưa kiểm toán'
                                                        : a.AuditedStatus === 'SX'
                                                        ? 'Soát xét'
                                                        : ''}
                                                </td>
                                            </>
                                        );
                                    })}
                                </td>
                            </tr>

                            <tr className="w-full h-[40px] text-md border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                                <td className=" w-[300px] pl-4">Công ty kiểm toán</td>
                                <td className="w-auto">
                                    <Tooltip title="..." placement="top">
                                        <ErrorOutlineOutlinedIcon />
                                    </Tooltip>
                                </td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    {row2?.map((a: any, index: any) => {
                                        return (
                                            <>
                                                <td
                                                    align="center"
                                                    className={`w-[170px] px-6' h-[40px] index ${
                                                        colHover === index ? 'classHoverCol' : ''
                                                    }`}
                                                    onMouseEnter={() => setColHover(index)}
                                                    onMouseLeave={() => setColHover('')}
                                                ></td>
                                            </>
                                        );
                                    })}
                                </td>
                            </tr>

                            <tr className="w-full h-[40px] text-md border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                                <td className=" w-[300px] pl-4">Ý kiến kiểm toán</td>
                                <td className="w-auto">
                                    <Tooltip title="..." placement="top">
                                        <ErrorOutlineOutlinedIcon />
                                    </Tooltip>
                                </td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    {row2?.map((a: any, index: any) => {
                                        return (
                                            <>
                                                <td
                                                    align="center"
                                                    className={`w-[170px] px-6' h-[40px] index ${
                                                        colHover === index ? 'classHoverCol' : ''
                                                    }`}
                                                    onMouseEnter={() => setColHover(index)}
                                                    onMouseLeave={() => setColHover('')}
                                                ></td>
                                            </>
                                        );
                                    })}
                                </td>
                            </tr>

                            <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                                <td className=" w-[300px] pl-4"></td>
                                <td className="w-auto"></td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    <td className={`w-[170px] px-6' `}>
                                        <KeyboardArrowUp
                                            className="cursor-pointer hover:text-gray-200"
                                            fontSize="large"
                                            onClick={() => setState(!state)}
                                        />
                                    </td>
                                </td>
                            </tr>
                        </tbody>
                    ) : (
                        <tbody>
                            <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                                <td className=" w-[300px] pl-4"></td>
                                <td className="w-auto"></td>
                                <td className="w-auto"></td>
                                <td className="min-w-[1000px]" align="right">
                                    <td className={`w-[170px] px-6' `}>
                                        <KeyboardArrowDown
                                            className="cursor-pointer hover:text-gray-200"
                                            fontSize="large"
                                            onClick={() => setState(!state)}
                                        />
                                    </td>
                                </td>
                            </tr>
                        </tbody>
                    )}

                    {dataGetFinance}
                </table>
            )}
        </>
    );
}
