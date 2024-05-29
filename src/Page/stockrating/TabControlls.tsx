import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import TongQuanPage from "./TongQuanPage/TongQuanPage";
import BCTCPage from "./BCTCPage/BCTCPage";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="!rounded-lg"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const theme = createTheme({
    palette: {
        primary: {
            main: orange[900]
        },
    },
});

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`
    };
}

export default function TabControlls() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme} >
            <Box sx={{ width: "100%" }}>
                <Box className="flex justify-center" sx={{ borderBottom: 2, borderColor: "divider" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        textColor="inherit"
                        indicatorColor='primary'
                    >
                        <Tab sx={{ color: "white", fontSize: 18, fontWeight: 700 }} label="TỔNG QUAN" {...a11yProps(0)} />
                        <Tab sx={{ color: "white", fontSize: 18, fontWeight: 700 }} label="BÁO CÁO TÀI CHÍNH" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <hr />
                <CustomTabPanel value={value} index={0}>
                    <TongQuanPage />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <BCTCPage />
                </CustomTabPanel>

            </Box>
        </ThemeProvider>
    );
}
