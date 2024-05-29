import { call, put, takeLatest } from 'redux-saga/effects';
import { stockRatingAct } from './stockRatingSlice';
import api from '../../../Utils/fectAPI';
import * as Type from '../types';
import { PayloadAction } from '@reduxjs/toolkit';

function* getDataFinance(action: PayloadAction<Type.DataGetFinance>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(() => api.post('/stock/get-finance', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getFinanceInformationSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getFinanceInformationFail(error));
    }
}

function* getDataCrr(action: PayloadAction<Type.DataGetCrr>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/stock/get-crr', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getCrrReportTermSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getCrrReportTermFail(error));
    }
}

function* getChartTangTruongDoanhThu(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;

    try {
        const response: Type.ResponseApi = yield call(
            async () => await api.post('/chart/get-tang-truong-doanh-thu', data),
        );
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartTangTruongDoanhThuSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartTangTruongDoanhThuFail(error));
    }
}

function* getChartTangTruongLoiNhuan(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(
            async () => await api.post('/chart/get-tang-truong-loi-nhuan', data),
        );
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartTangTruongLoiNhuanSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartTangTruongLoiNhuanFail(error));
    }
}

function* getChartBienLoiNhuan(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-bien-loi-nhuan', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartBienLoiNhuanSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartBienLoiNhuanFail(error));
    }
}

function* getChartDinhGia(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-dinh-gia', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartDinhGiaSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartDinhGiaFail(error));
    }
}

function* getChartDongTien(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-dong-tien', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartDongTienSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartDongTienFail(error));
    }
}

function* getChartHieuQuaSuDungVon(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(
            async () => await api.post('/chart/get-hieu-qua-su-dung-von', data),
        );
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartHieuQuaSuDungVonSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartHieuQuaSuDungVonFail(error));
    }
}

function* getChartTaiSan(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-tai-san', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartTaiSanSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartTaiSanFail(error));
    }
}

function* getChartNguonVon(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-nguon-von', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartNguonVonSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartNguonVonFail(error));
    }
}

function* getChartCauTrucTaiSan(action: PayloadAction<Type.ChartData>) {
    const data = action.payload;
    try {
        const response: Type.ResponseApi = yield call(async () => await api.post('/chart/get-cau-truc-tai-san', data));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getChartCauTrucTaiSanSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getChartCauTrucTaiSanFail(error));
    }
}

function* getDataStockById(action: PayloadAction<number>) {
    try {
        const response: Type.ResponseApi = yield call(async () => await api.get(`/stock/get-stock/${action.payload}`));
        yield put(stockRatingAct.getStockByIdSuccess(response.data));
    } catch (error) {
        yield put(stockRatingAct.getStockByIdFail(error));
    }
}

function* getDataStockCode() {
    try {
        const response: Type.ResponseApi = yield call(async () => await api.get('/stock/get-stock'));
        if (response.statusCode === 200) {
            yield put(stockRatingAct.getStockCodeSuccess(response.data));
        }
    } catch (error) {
        yield put(stockRatingAct.getStockCodeFail(error));
    }
}
export function* stockRatingSaga() {
    yield takeLatest(stockRatingAct.getFinanceInformationRequest.type, getDataFinance);
    yield takeLatest(stockRatingAct.getCrrReportTermRequest.type, getDataCrr);
    yield takeLatest(stockRatingAct.getFinanceInformationRequest.type, getDataFinance);
    yield takeLatest(stockRatingAct.getCrrReportTermRequest.type, getDataCrr);
    yield takeLatest(stockRatingAct.getStockCodeRequest.type, getDataStockCode);
    yield takeLatest(stockRatingAct.getStockByIdRequest.type, getDataStockById);
    //chart
    yield takeLatest(stockRatingAct.getChartTangTruongDoanhThuRequest.type, getChartTangTruongDoanhThu);
    yield takeLatest(stockRatingAct.getChartTangTruongLoiNhuanRequest.type, getChartTangTruongLoiNhuan);
    yield takeLatest(stockRatingAct.getChartBienLoiNhuanRequest.type, getChartBienLoiNhuan);
    yield takeLatest(stockRatingAct.getChartDinhGiaRequest.type, getChartDinhGia);
    yield takeLatest(stockRatingAct.getChartDongTienRequest.type, getChartDongTien);
    yield takeLatest(stockRatingAct.getChartHieuQuaSuDungVonRequest.type, getChartHieuQuaSuDungVon);
    yield takeLatest(stockRatingAct.getChartTaiSanRequest.type, getChartTaiSan);
    yield takeLatest(stockRatingAct.getChartNguonVonRequest.type, getChartNguonVon);
    yield takeLatest(stockRatingAct.getChartCauTrucTaiSanRequest.type, getChartCauTrucTaiSan);
}
