import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { stockRatingAct } from '../Saga/stockRatingSlice';
import { RootState } from '../../../store';
import { GridContextProvider, GridDropZone, GridItem, swap } from 'react-grid-dnd';
import { useWindowSize } from './../../../utility';

import './../style.css';
import TangTruongDoanhThu from './TangTruongDoanhThu';
import TangTruongLoiNhuan from './TangTruongLoiNhuan';
import BienLoiNhuan from './BienLoiNhuan';
import DinhGia from './DinhGia';
import DongTien from './DongTien';
import HieuQuaSuDungVon from './HieuQuaSuDungVon';
import TaiSan from './TaiSan';
import NguonVon from './NguonVon';
import CauTrucTaiSan from './CauTrucTaiSan';
import { log } from 'console';

type Props = { dragAndDropEnabled: any };

interface ChartList {
    id: string;
    component: React.ReactNode; // Sử dụng kiểu React.ReactNode cho component
}

const CustomLeftYAxisTick: React.FC<any> = (props) => {
    const { x, y, payload } = props;
    const value: number = payload.value;
    const formattedValue: string = value >= 1000 ? `${value / 1000}k` : value.toString();
    return (
        <text x={x} y={y} dy={0} fill="#666" fontSize={12} textAnchor="end">
            {formattedValue}
        </text>
    );
};

const CustomRightYAxisTick: React.FC<any> = (props) => {
    const { x, y, payload } = props;
    // console.log(props);

    const value: number = payload.value;
    const formattedValue: string = value >= 1000 ? `${value / 1000}k` : value.toString();
    return (
        <text x={x} y={y} dy={0} fill="#666" fontSize={12} textAnchor="start">
            {formattedValue}
        </text>
    );
};

const CustomXAxisTick: React.FC<any> = (props, key) => {
    return (
        // <g transform={`translate(${x},${y})`}>
        //     <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-45)">
        //         {`${TermCode}/${YearPeriod}`}
        //     </text>
        // </g>
        <p></p>
    );
};

export default function BieuDo(props: Props) {
    const dispatch = useAppDispatch();
    const { ReportTermType, Unit, PeriodYear, dataStockById } = useAppSelector((state: RootState) => state.stockRating);
    let { dragAndDropEnabled } = props;

    const { width } = useWindowSize();
    const widthChart = (width - (80 + 20) - 24 * 2) / 3;
    const heightChart = widthChart * 3;

    const StockCode = dataStockById?.StockCode;

    const [chartList, setChartList] = useState<ChartList[]>([
        {
            id: '1',
            component: (
                <TangTruongDoanhThu
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '2',
            component: (
                <TangTruongLoiNhuan
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '3',
            component: (
                <BienLoiNhuan
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '4',
            component: (
                <DinhGia
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '5',
            component: (
                <DongTien
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '6',
            component: (
                <HieuQuaSuDungVon
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '7',
            component: (
                <TaiSan
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '8',
            component: (
                <NguonVon
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
        {
            id: '9',
            component: (
                <CauTrucTaiSan
                    CustomLeftYAxisTick={CustomLeftYAxisTick}
                    CustomRightYAxisTick={CustomRightYAxisTick}
                    CustomXAxisTick={CustomXAxisTick}
                />
            ),
        },
    ]);

    useEffect(() => {
        dispatch(
            stockRatingAct.getChartTangTruongDoanhThuRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartTangTruongLoiNhuanRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartBienLoiNhuanRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartDinhGiaRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartDongTienRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartHieuQuaSuDungVonRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartTaiSanRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartNguonVonRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
        dispatch(
            stockRatingAct.getChartCauTrucTaiSanRequest({
                StockCode,
                ReportTermType,
                Unit,
                PeriodYear,
            }),
        );
    }, [StockCode]);

    function onChange(sourceId: any, sourceIndex: any, targetIndex: any, targetId: any) {
        const nextState = swap(chartList, sourceIndex, targetIndex);
        setChartList(nextState);
    }

    return (
        <div>
            <GridContextProvider onChange={onChange}>
                <GridDropZone
                    id="chartList"
                    boxesPerRow={3}
                    rowHeight={widthChart}
                    style={{ height: `${heightChart}px` }}
                    disableDrag={!dragAndDropEnabled}
                >
                    {chartList.map((chart) => (
                        <GridItem key={chart.id} style={{ cursor: dragAndDropEnabled ? 'move' : 'auto' }}>
                            <div className="m-1 ">{chart.component}</div>
                        </GridItem>
                    ))}
                </GridDropZone>
            </GridContextProvider>
        </div>

        // <div className="flex flex-wrap">
        //     <TangTruongDoanhThu
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <TangTruongLoiNhuan
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <BienLoiNhuan
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <DinhGia
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <DongTien
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <HieuQuaSuDungVon
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <TaiSan
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <NguonVon
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />

        //     <CauTrucTaiSan
        //         CustomLeftYAxisTick={CustomLeftYAxisTick}
        //         CustomRightYAxisTick={CustomRightYAxisTick}
        //         CustomXAxisTick={CustomXAxisTick}
        //     />
        // </div>
    );
}
