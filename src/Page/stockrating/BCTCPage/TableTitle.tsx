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
import React, { useEffect, useMemo, useState } from 'react';
import '../style.css';
import { KeyboardArrowDown, KeyboardArrowUp, ErrorOutlineOutlined } from '@mui/icons-material';
import moment from 'moment';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { stockRatingAct } from '../Saga/stockRatingSlice';
import { Row, Skeleton } from 'antd';
import Loading from '../../../component/loading';

type Props = {
    Title: string;
};

export default function TableTitle(props: Props) {
    const dispatch = useAppDispatch();

    let { dataGetCrr, loading, PageSize, Ordering, StockCode, ReportTermType, dataStockById } = useAppSelector(
        (state: RootState) => state.stockRating,
    );
    const [state, setState] = useState(true);
    const [colHover, setColHover]: any = useState('');
    const [classFixed, setClassFixed]: any = useState(false);
    const classHoverCol = 'classHoverCol';
    let [row2, setRow2] = useState<any>([]);
    const { Title } = props;
    useEffect(() => {
        dispatch(
            stockRatingAct.getCrrReportTermRequest({
                iStockCode: dataStockById?.StockCode,
                ReportTermTypeID: ReportTermType,
                PageIndex: 1,
                PageSize,
                Ordering,
            }),
        );
    }, [PageSize, ReportTermType, Ordering, dataStockById]);

    useEffect(() => {
        setRow2(dataGetCrr);
    }, [dataGetCrr, PageSize, ReportTermType, Ordering, Title]);

    useMemo(() => {
        const handleScroll = () => {
            setClassFixed(window.scrollY >= 930);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (loading) return <Loading />;

    return (
        <>
            <thead className="max-w-[1371px] min-w-[1371px] w-[1371px] !border-y-0">
                <tr className={`w-[1371px] h-[50px] leading-[50px] bg-black top-0 mx-auto  ${classFixed ? '' : ''}`}>
                    <th className="text-white min-w-[400px] max-w-[400px] pl-4" align="left">
                        {Title} - {dataStockById?.StockCode}
                    </th>
                    <th className="min-w-[70px]"></th>
                    <th className="min-w-[70px]"></th>
                    <th className="min-w-[70px]"></th>
                    <th className="min-w-[750px]" align="right">
                        {row2?.map((a: any) => {
                            return (
                                <>
                                    <th className="text-white w-[152px] max-w-[152px] px-6 " align="center">
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
                {state ? (
                    <>
                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300 hover:bg-gray-900  ">
                            <th className="min-w-[400px] max-w-[400px] pl-4" align="left">
                                Giai đoạn
                            </th>
                            <th className="min-w-[70px]" align="left">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </th>
                            <th className="min-w-[70px]"></th>
                            <th className="!max-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                {row2?.map((a: any, index: any) => {
                                    return (
                                        <>
                                            <th
                                                key={index}
                                                align="center"
                                                className={`w-[152px] max-w-[152px] h-[40px] px-6' index ${
                                                    colHover === index ? 'classHoverCol' : ''
                                                }`}
                                                onMouseEnter={() => setColHover(index)}
                                                onMouseLeave={() => setColHover('')}
                                            >
                                                {moment(a?.PeriodBegin, 'YYYYMM').format('MM/YY')} -{' '}
                                                {moment(a?.PeriodEnd, 'YYYYMM').format('MM/YY')}
                                            </th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>

                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300 hover:bg-gray-900 ">
                            <th className="min-w-[400px] max-w-[400px] pl-4" align="left">
                                Hợp nhất
                            </th>
                            <th className="min-w-[70px]" align="left">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                {row2?.map((a: any, index: any) => {
                                    return (
                                        <>
                                            <th
                                                key={index}
                                                align="center"
                                                className={`w-[152px] max-w-[152px] h-[40px] px-6' index ${
                                                    colHover === index ? 'classHoverCol' : ''
                                                }`}
                                                onMouseEnter={() => setColHover(index)}
                                                onMouseLeave={() => setColHover('')}
                                            >
                                                {a.United === 'HN' ? 'Hợp nhất' : ''}
                                            </th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>

                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300 hover:bg-gray-900 ">
                            <th className="min-w-[400px] max-w-[400px] pl-4" align="left">
                                Kiểm toán
                            </th>
                            <th className="min-w-[70px]" align="left">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                {row2?.map((a: any, index: any) => {
                                    return (
                                        <>
                                            <th
                                                key={index}
                                                align="center"
                                                className={`w-[152px] max-w-[152px] h-[40px] px-6' index ${
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
                                            </th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>

                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300 hover:bg-gray-900 ">
                            <th className="min-w-[400px] max-w-[400px] pl-4" align="left">
                                Công ty kiểm toán
                            </th>
                            <th className="min-w-[70px]" align="left">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                {row2?.map((a: any, index: any) => {
                                    return (
                                        <>
                                            <th
                                                key={index}
                                                align="center"
                                                className={`w-[152px] max-w-[152px] h-[40px] px-6' index ${
                                                    colHover === index ? 'classHoverCol' : ''
                                                }`}
                                                onMouseEnter={() => setColHover(index)}
                                                onMouseLeave={() => setColHover('')}
                                            ></th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>

                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] text-md border-gray-300 hover:bg-gray-900 ">
                            <th className="min-w-[400px] max-w-[400px] pl-4" align="left">
                                Ý kiến kiểm toán
                            </th>
                            <th className="min-w-[70px]" align="left">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                {row2?.map((a: any, index: any) => {
                                    return (
                                        <>
                                            <th
                                                key={index}
                                                align="center"
                                                className={`w-[152px] max-w-[152px] h-[40px] px-6' index ${
                                                    colHover === index ? 'classHoverCol' : ''
                                                }`}
                                                onMouseEnter={() => setColHover(index)}
                                                onMouseLeave={() => setColHover('')}
                                            ></th>
                                        </>
                                    );
                                })}
                            </th>
                        </tr>

                        <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] border-gray-300 hover:bg-gray-900 ">
                            <th className=" min-w-[400px] max-w-[400px] pl-4"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[70px]"></th>
                            <th className="min-w-[750px]" align="right">
                                <th className={`w-[152px] max-w-[152px] px-6' `}>
                                    <KeyboardArrowUp
                                        className="cursor-pointer hover:text-gray-200"
                                        fontSize="large"
                                        onClick={() => setState(!state)}
                                    />
                                </th>
                            </th>
                        </tr>
                    </>
                ) : (
                    <tr className="w-full h-[40px] border-y bg-[#262626] text-[#A5ACBC] border-gray-300">
                        <th className=" min-w-[400px] max-w-[400px] pl-4"></th>
                        <th className="min-w-[70px]"></th>
                        <th className="min-w-[70px]"></th>
                        <th className="min-w-[70px]"></th>
                        <th className="min-w-[750px]" align="right">
                            <th className={`w-[152px] max-w-[152px] px-6' `}>
                                <KeyboardArrowDown
                                    className="cursor-pointer hover:text-gray-200"
                                    fontSize="large"
                                    onClick={() => setState(!state)}
                                />
                            </th>
                        </th>
                    </tr>
                )}
            </thead>
        </>
    );
}
