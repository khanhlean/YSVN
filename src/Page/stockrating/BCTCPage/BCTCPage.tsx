import React, { useState } from 'react';
import '../style.css';
import { FormControl, Select, Button, Box, Typography, Tabs, Tab, MenuItem } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KQKDTable from '../KQKDTable';
import CDKTTable from '../CDKTTable';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import BCTCTomTat from './BCTCTomTat';
import { useAppDispatch } from '../../../store/hook';
import AddIcon from '@mui/icons-material/Add';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import BieuDo from '../BieuDoPage/BieuDo';
import { stockRatingAct } from './../Saga/stockRatingSlice';

type Props = {};

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: orange[900],
        },
    },
});

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function BCTCPage({}: Props) {
    const dispatch = useAppDispatch();

    const [value, setValue] = useState(0);
    const [ordering, setOrdering] = useState('DESC');
    const [pageSize, setPageSize] = useState(4);
    const [reportTermType, setReportTermType] = useState(1);
    const [unit, setUnit] = useState(1000000000);
    const [dragAndDropEnabled, setDragAndDropEnabled] = useState(false);

    const handleButtonDnDClick = () => {
        setDragAndDropEnabled(!dragAndDropEnabled);
    };

    const index = value;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <div
                style={{
                    height: 'auto',
                    backgroundColor: '#262626',
                    width: '100%',
                    marginTop: '20px',
                    borderRadius: '0.375rem',
                }}
                className="p-6"
            >
                <div className="">
                    <Box sx={{ width: '100%' }}>
                        <Box className="flex justify-around " sx={{ borderBottom: 2, borderColor: 'divider' }}>
                            <Tabs
                                sx={{ padding: '0 20px' }}
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                                textColor="inherit"
                                indicatorColor="primary"
                            >
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Biểu đồ"
                                    {...a11yProps(0)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="BCTC Tóm tắt"
                                    {...a11yProps(1)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Cân đối kế toán"
                                    {...a11yProps(2)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Kết quả kinh doanh"
                                    {...a11yProps(3)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Lưu chuyển tiền tệ"
                                    {...a11yProps(4)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Chỉ số tài chính"
                                    {...a11yProps(5)}
                                />
                                <Tab
                                    sx={{
                                        padding: '0 20px',
                                        color: 'white',
                                        fontSize: 18,
                                        fontWeight: 500,
                                    }}
                                    label="Chi tiêu kế hoạch"
                                    {...a11yProps(6)}
                                />
                            </Tabs>
                        </Box>
                        <hr />

                        {index === 0 ? (
                            <div className="my-5 flex justify-between items-center">
                                <div className="flex items-center h-full">
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Button
                                            className="hover:!bg-blue-800"
                                            sx={{
                                                color: 'white',
                                                fontSize: '12px',
                                                backgroundColor: '#164194',
                                                height: '40px',
                                                padding: '0 10px',
                                                textTransform: 'none',
                                            }}
                                        >
                                            Trang mặc định
                                        </Button>
                                    </FormControl>

                                    <FormControl sx={{ m: 1 }}>
                                        <Button
                                            className="hover:!bg-slate-500"
                                            sx={{
                                                backgroundColor: '#576072',
                                                height: '40px',
                                                minWidth: '40px',
                                            }}
                                        >
                                            <AddIcon sx={{ color: 'white', fontSize: '20px' }} />
                                        </Button>
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Button
                                            className="hover:!bg-blue-800"
                                            sx={{
                                                color: 'white',
                                                fontSize: '12px',
                                                backgroundColor: '#164194',
                                                height: '45px',
                                                padding: '0 20px',
                                                textTransform: 'none',
                                            }}
                                            startIcon={<AppRegistrationIcon />}
                                            onClick={handleButtonDnDClick}
                                        >
                                            {dragAndDropEnabled ? 'Lưu' : 'Sửa trang'}
                                        </Button>
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Button
                                            className="hover:!bg-blue-800"
                                            sx={{
                                                color: 'white',
                                                fontSize: '12px',
                                                backgroundColor: '#164194',
                                                height: '45px',
                                                padding: '0 20px',
                                                textTransform: 'none',
                                            }}
                                            startIcon={<FormatListBulletedIcon />}
                                        >
                                            Danh mục biểu đồ
                                        </Button>
                                    </FormControl>
                                </div>
                            </div>
                        ) : (
                            <div className="my-5 flex justify-between items-center">
                                <div className="flex items-center h-full">
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            sx={{
                                                border: '1px solid #A5ACBC',
                                                height: 55,
                                                width: 'auto',
                                                color: '#A5ACBC',
                                            }}
                                            value={ordering}
                                            onChange={(e) => {
                                                setOrdering(e.target.value);
                                                dispatch(stockRatingAct.handleOrdering(e.target.value));
                                            }}
                                        >
                                            <MenuItem value={'ASC'}>Cũ đến mới</MenuItem>
                                            <MenuItem value={'DESC'}>mới đến cũ</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            sx={{
                                                border: '1px solid #A5ACBC',
                                                height: 55,
                                                width: 'auto',
                                                color: '#A5ACBC',
                                            }}
                                            value={pageSize}
                                            onChange={(e: any) => {
                                                setPageSize(e.target.value);
                                                dispatch(stockRatingAct.handlePageSize(e.target.value));
                                            }}
                                        >
                                            <MenuItem value={1}>1 Kỳ</MenuItem>
                                            <MenuItem value={2}>2 Kỳ</MenuItem>
                                            <MenuItem value={3}>3 Kỳ</MenuItem>
                                            <MenuItem value={4}>4 Kỳ</MenuItem>
                                            <MenuItem value={5}>5 Kỳ</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            sx={{
                                                border: '1px solid #A5ACBC',
                                                height: 55,
                                                width: 'auto',
                                                color: '#A5ACBC',
                                            }}
                                            value={reportTermType}
                                            onChange={(e: any) => {
                                                setReportTermType(e.target.value);
                                                dispatch(stockRatingAct.handleReportTermType(e.target.value));
                                            }}
                                        >
                                            <MenuItem value={2}>Quý</MenuItem>
                                            <MenuItem value={1}>Năm</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            sx={{
                                                border: '1px solid #A5ACBC',
                                                height: 55,
                                                width: 'auto',
                                                color: '#A5ACBC',
                                            }}
                                            value={unit}
                                            onChange={(e: any) => {
                                                setUnit(e.target.value);
                                                dispatch(stockRatingAct.handleUnit(e.target.value));
                                            }}
                                        >
                                            <MenuItem value={1000}>Nghìn đồng</MenuItem>
                                            <MenuItem value={1000000}>Triệu đồng</MenuItem>
                                            <MenuItem value={1000000000}>Tỷ đồng</MenuItem>
                                        </Select>
                                    </FormControl>

                                    <Button
                                        className="hover:!bg-blue-800"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#164194',
                                            height: '58px',
                                            padding: '0 20px',
                                        }}
                                        endIcon={<FileDownloadIcon sx={{ color: 'white' }} />}
                                    >
                                        Tải file Excel
                                    </Button>
                                    <Button
                                        className="hover:!bg-blue-800"
                                        sx={{
                                            color: 'white',
                                            backgroundColor: '#164194',
                                            height: '58px',
                                            padding: '0 20px',
                                            margin: '0 20px',
                                        }}
                                        endIcon={<FileDownloadIcon sx={{ color: 'white' }} />}
                                    >
                                        Truy xuất nâng cao
                                    </Button>
                                </div>
                                <div className="h-10 flex item-center">
                                    <SkipPreviousIcon
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            backgroundColor: '#164194',
                                            margin: '0 8px',
                                            width: 30,
                                            height: 30,
                                            padding: '5px',
                                        }}
                                    />
                                    <ArrowBackIosNewIcon
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            backgroundColor: '#164194',
                                            margin: '0 8px',
                                            width: 30,
                                            height: 30,
                                            padding: '5px',
                                        }}
                                    />
                                    <ArrowForwardIosIcon
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            backgroundColor: '#164194',
                                            margin: '0 8px',
                                            width: 30,
                                            height: 30,
                                            padding: '5px',
                                        }}
                                    />
                                    <SkipNextIcon
                                        sx={{
                                            color: 'white',
                                            borderRadius: '50%',
                                            backgroundColor: '#164194',
                                            margin: '0 8px',
                                            width: 30,
                                            height: 30,
                                            padding: '5px',
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        <CustomTabPanel value={value} index={0}>
                            <BieuDo dragAndDropEnabled={dragAndDropEnabled} />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <BCTCTomTat />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <CDKTTable />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={3}>
                            <KQKDTable
                                StockCode={'ABC'}
                                Ordering={ordering}
                                Unit={unit}
                                PageSize={pageSize}
                                ReportType={'BCTC'}
                                ReportTermType={reportTermType}
                            />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={4}>
                            {/* <KQKDTable /> */}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={5}>
                            {/* <KQKDTable /> */}
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={6}>
                            {/* <KQKDTable /> */}
                        </CustomTabPanel>
                    </Box>
                </div>
            </div>
        </ThemeProvider>
    );
}
