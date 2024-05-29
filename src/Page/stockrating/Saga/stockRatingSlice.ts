import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../store';
import * as typeSR from '../types';

const initialState: typeSR.StockRatingState = {
    loading: false,
    error: null,
    // dataGetCrr: [],
    dataGetFinance: [],
    chartData: {
        tangTruongDoanhThu: [],
        tangTruongLoiNhuan: [],
        bienLoiNhuan: [],
        dinhGia: [],
        dongTien: [],
        hieuQuaSuDungVon: [],
        taiSan: [],
        nguonVon: [],
        cauTrucTaiSan: [],
    },
    dataStockCode: [],
    dataStockById: null,

    ReportTermType: 2,
    Unit: 1000000000,
    PageSize: 4,
    ReportType: 'BCTC',
    Ordering: 'DESC',
    // StockCode: 'VNM',
    PeriodYear: 2021,
};

const stockRatingSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // get finance information
        getFinanceInformationRequest: (
            state: typeSR.StockRatingState,
            action: PayloadAction<typeSR.DataGetFinance>,
        ) => {
            state.loading = true;
        },
        getFinanceInformationSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.dataGetFinance = action.payload;
        },
        getFinanceInformationFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        // get crr report term
        getCrrReportTermRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.DataGetCrr>) => {
            state.loading = true;
        },
        getCrrReportTermSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.dataGetCrr = action.payload;
            state.loading = false;
        },
        getCrrReportTermFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        },

        // change value call api
        handleStockCode: (state: typeSR.StockRatingState, action: PayloadAction<string>) => {
            state.StockCode = action.payload;
        },
        handleReportTermType: (state: typeSR.StockRatingState, action: PayloadAction<number>) => {
            state.ReportTermType = action.payload;
        },
        handleReportType: (state: typeSR.StockRatingState, action: PayloadAction<string>) => {
            state.ReportType = action.payload;
        },
        handlePageSize: (state: typeSR.StockRatingState, action: PayloadAction<number>) => {
            state.PageSize = action.payload;
        },
        handleUnit: (state: typeSR.StockRatingState, action: PayloadAction<number>) => {
            state.Unit = action.payload;
        },
        handleOrdering: (state: typeSR.StockRatingState, action: PayloadAction<string>) => {
            state.Ordering = action.payload;
        },

        // get data stock code
        getStockCodeRequest: (state: typeSR.StockRatingState) => {
            state.loading = true;
        },
        getStockCodeSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.dataStockCode = action.payload;
            state.loading = false;
        },
        getStockCodeFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        },

        //get stock by id
        getStockByIdRequest: (state: typeSR.StockRatingState, action: PayloadAction<number>) => {
            state.loading = true;
        },
        getStockByIdSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.dataStockById = action.payload;
            state.loading = false;
        },
        getStockByIdFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.error = action.payload;
            state.loading = false;
        },

        //chart tang truong doanh thu
        getChartTangTruongDoanhThuRequest: (
            state: typeSR.StockRatingState,
            action: PayloadAction<typeSR.ChartData>,
        ) => {
            state.loading = true;
        },
        getChartTangTruongDoanhThuSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.tangTruongDoanhThu = action.payload;
        },
        getChartTangTruongDoanhThuFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart tang truong loi nhuan
        getChartTangTruongLoiNhuanRequest: (
            state: typeSR.StockRatingState,
            action: PayloadAction<typeSR.ChartData>,
        ) => {
            state.loading = true;
        },
        getChartTangTruongLoiNhuanSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.tangTruongLoiNhuan = action.payload;
        },
        getChartTangTruongLoiNhuanFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart bien loi nhuan
        getChartBienLoiNhuanRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartBienLoiNhuanSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.bienLoiNhuan = action.payload;
        },
        getChartBienLoiNhuanFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart dinh gia
        getChartDinhGiaRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartDinhGiaSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.dinhGia = action.payload;
        },
        getChartDinhGiaFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart dong tien
        getChartDongTienRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartDongTienSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.dongTien = action.payload;
        },
        getChartDongTienFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart hieu qua su dung von
        getChartHieuQuaSuDungVonRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartHieuQuaSuDungVonSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.hieuQuaSuDungVon = action.payload;
        },
        getChartHieuQuaSuDungVonFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart tai san
        getChartTaiSanRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartTaiSanSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.taiSan = action.payload;
        },
        getChartTaiSanFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart nguon von
        getChartNguonVonRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartNguonVonSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.nguonVon = action.payload;
        },
        getChartNguonVonFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },

        //chart cau truc tai san
        getChartCauTrucTaiSanRequest: (state: typeSR.StockRatingState, action: PayloadAction<typeSR.ChartData>) => {
            state.loading = true;
        },
        getChartCauTrucTaiSanSuccess: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.chartData.cauTrucTaiSan = action.payload;
        },
        getChartCauTrucTaiSanFail: (state: typeSR.StockRatingState, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

const stockRatingReducer = stockRatingSlice.reducer;
export default stockRatingReducer;

export const stockRatingAct = stockRatingSlice.actions;

export const stockRatingSelector = (state: RootState) => state.stockRating;
