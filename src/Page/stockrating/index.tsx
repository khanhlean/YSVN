import React from 'react';
import { Box, styled } from '@mui/material';
import Body4 from './body4';
import TinHieu from './TinHieu';
import ThongTin from './ThongTin';
import ChiSo from './ChiSo';
import HeaderCpn from './headerStockRating';

type Props = {};

export default function StockRating({}: Props) {
    const CustomBody = styled(Box)({
        backgroundColor: '#111111',
        height: '100%',
        width: '100%',
        padding: '10px 20px 0 80px',
    });

    return (
        <>
            <HeaderCpn />
            <CustomBody>
                <TinHieu />

                <ThongTin />

                <ChiSo />

                <Body4 />
            </CustomBody>
        </>
    );
}
