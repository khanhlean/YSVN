export interface StockRatingState {
    loading: boolean;
    error: null | any;
    dataGetFinance?: [];
    dataGetCrr?: [];
    dataStockCode?: [];
    dataStockById?: null | Stock;
    chartData: {
        tangTruongDoanhThu?: ChartData[] | undefined;
        tangTruongLoiNhuan?: ChartData[] | undefined;
        bienLoiNhuan?: ChartData[] | undefined;
        dinhGia?: ChartData[] | undefined;
        dongTien?: ChartData[] | undefined;
        hieuQuaSuDungVon?: ChartData[] | undefined;
        taiSan?: ChartData[] | undefined;
        nguonVon?: ChartData[] | undefined;
        cauTrucTaiSan?: ChartData[] | undefined;
    };

    StockCode?: string | undefined;
    ReportTermType?: number;
    Unit?: number | undefined;
    PageSize?: number | undefined;
    ReportType?: string | undefined;
    Ordering?: string | undefined;
    PeriodYear?: number | undefined;
}

export interface DataGetCrr {
    iStockCode: string | undefined | number;
    ReportTermTypeID: number | undefined;
    PageIndex: number | undefined;
    PageSize: number | undefined;
    Ordering: string | undefined;
    loading: boolean;
    error: null | any;
    dataGetFinance?: [];
    dataGetCrr?: [];
    dataStockCode?: [];
    dataStockById?: null | Stock;
    StockCode?: string | undefined;
    ReportTermType?: number | undefined;
    Unit?: number | undefined;
    ReportType?: string | undefined;
}

export interface Stock {
    StockID: number;
    StockCode: string | number;
    StockName: string;
}

export interface DataGetFinance {
    StockCode: string | undefined | number;
    ReportTermType: number | undefined;
    Unit: number | undefined;
    PageIndex: number | undefined;
    PageSize: number | undefined;
    ReportType: string | undefined;
}

export interface ResponseApi {
    statusCode: number;
    data: [];
    message: string;
}

export interface ChartData {
    StockCode: string | number | undefined;
    ReportTermType: number | undefined;
    Unit: number | undefined;
    PeriodYear: number | undefined;
}
