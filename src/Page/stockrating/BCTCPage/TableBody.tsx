import { Tooltip } from '@mui/material';
import { PollRounded, ErrorOutlineOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { RootState } from '../../../store';
import { Row, Skeleton } from 'antd';
import { stockRatingAct } from '../Saga/stockRatingSlice';
import '../style.css';
import MiniChart from './MiniChart';
import { title } from 'process';
import Loading from '../../../component/loading';

type Props = {
    start?: number;
    end?: number;
    bold?: number[];
    donVi?: number[];
};

export default function TableBody(props: Props) {
    const dispatch = useAppDispatch();
    const {
        dataGetFinance,
        StockCode,
        dataGetCrr,
        ReportTermType,
        Unit,
        PageSize,
        ReportType,
        loading,
        dataStockById,
    } = useAppSelector((state: RootState) => state.stockRating);
    const [colHover, setColHover]: any = useState('');
    const classHoverCol = 'classHoverCol';
    let { start, end, bold, donVi } = props;

    useEffect(() => {
        dispatch(
            stockRatingAct.getFinanceInformationRequest({
                StockCode: dataStockById?.StockCode,
                ReportTermType,
                PageIndex: 1,
                ReportType,
                Unit,
                PageSize,
            }),
        );
    }, [PageSize, ReportTermType, ReportType, Unit, dataStockById]);

    const data2 = dataGetFinance?.slice(start, end)?.map((item: any) => {
        let b: any[] = [];
        b = [...b, item.Value1, item.Value2, item.Value3, item.Value4, item.Value5];
        return b;
    });

    if (loading) return <Loading />;
    return (
        <>
            <tbody className="w-full ">
                {dataGetFinance?.slice(start, end)?.map((item: any, index: any) => {
                    const b = bold?.filter((n: any) => n === index)[0];

                    return (
                        <tr
                            key={index}
                            className={`hover:bg-gray-900  w-max h-[40px] border-y bg-[#262626] text-[#A5ACBC] border-gray-300`}
                        >
                            <td
                                className={`${b || b === 0 ? 'text-gray-100 font-[700]' : ''} 
                         text-sm min-w-[400px] max-w-[400px] pl-4`}
                            >
                                {item.Name}
                            </td>
                            <td className="min-w-[70px]">
                                <Tooltip title="..." placement="top">
                                    <ErrorOutlineOutlined />
                                </Tooltip>
                            </td>
                            <td className="min-w-[70px]">
                                {donVi ? (donVi[index] === 1 ? 'VNĐ' : donVi[index] === 2 ? 'Lần' : '%') : ''}
                            </td>
                            <td className="max-w-[70px] w-[70px]">
                                {index === 18 ? (
                                    ''
                                ) : (
                                    <Tooltip
                                        title={
                                            <MiniChart dataGetCrr={dataGetCrr} dataGetFinance={data2} index={index} />
                                        }
                                        placement="left-end"
                                    >
                                        <PollRounded sx={{ color: '#68C2ED' }} />
                                    </Tooltip>
                                )}
                            </td>
                            <td className="min-w-[750px]" align="center">
                                <td
                                    align="center"
                                    onMouseEnter={() => setColHover(item.Value5 && 'col5')}
                                    onMouseLeave={() => setColHover('')}
                                    className={`w-[152px] max-w-[152px]  h-[40px] px-6 ${item.Value5 ? 'col5' : ''} ${
                                        colHover === 'col5' ? classHoverCol : ''
                                    }`}
                                >
                                    {item.Value5}
                                </td>
                                <td
                                    align="center"
                                    onMouseEnter={() => setColHover(item.Value4 && 'col4')}
                                    onMouseLeave={() => setColHover('')}
                                    className={`w-[152px] max-w-[152px] h-[40px] px-6 ${
                                        colHover === 'col4' ? classHoverCol : ''
                                    }`}
                                >
                                    {item.Value4}
                                </td>
                                <td
                                    align="center"
                                    onMouseEnter={() => setColHover(item.Value3 && 'col3')}
                                    onMouseLeave={() => setColHover('')}
                                    className={`w-[152px] max-w-[152px] h-[40px] px-6 ${
                                        colHover === 'col3' ? classHoverCol : ''
                                    }`}
                                >
                                    {item.Value3}
                                </td>
                                <td
                                    align="center"
                                    onMouseEnter={() => setColHover(item.Value2 && 'col2')}
                                    onMouseLeave={() => setColHover('')}
                                    className={`w-[152px] max-w-[152px] h-[40px] px-6 ${
                                        colHover === 'col2' ? classHoverCol : ''
                                    }`}
                                >
                                    {item.Value2}
                                </td>
                                <td
                                    align="center"
                                    onMouseEnter={() => setColHover(item.Value1 && 'col1')}
                                    onMouseLeave={() => setColHover('')}
                                    className={`w-[152px] max-w-[152px] h-[40px] px-6  ${
                                        colHover === 'col1' ? classHoverCol : ''
                                    } `}
                                >
                                    {item.Value1}
                                </td>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </>
    );
}
