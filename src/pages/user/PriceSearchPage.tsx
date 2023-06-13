import React, { useEffect, useState } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from "axios";

interface PriceData {
    product_cls_code: string;
    product_cls_name: string;
    category_code: string;
    category_name: string;
    productno: string;
    lastest_day: string;
    productName: string;
    item_name: string;
    unit: string;
    day1: string;
    dpr1: string;
    day2: string;
    dpr2: string;
    day3: string;
    dpr3: string;
    day4: string;
    dpr4: string;
    direction: string;
    value: string;
}

const PriceSearchPage: React.FC = () => {
    const [data, setData] = useState<PriceData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios('https://www.kamis.co.kr/service/price/xml.do?action=dailySalesList&p_cert_key=test&p_cert_id=test&p_returntype=json');
                setData(result.data.price);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Name</TableCell>
                        <TableCell align="right">Item Name</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Price (Day 1)</TableCell>
                        <TableCell align="right">Price (Day 2)</TableCell>
                        <TableCell align="right">Price (Day 3)</TableCell>
                        <TableCell align="right">Price (Day 4)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.productno}>
                            <TableCell component="th" scope="row">
                                {row.productName}
                            </TableCell>
                            <TableCell align="right">{row.item_name}</TableCell>
                            <TableCell align="right">{row.unit}</TableCell>
                            <TableCell align="right">{row.dpr1}</TableCell>
                            <TableCell align="right">{row.dpr2}</TableCell>
                            <TableCell align="right">{row.dpr3}</TableCell>
                            <TableCell align="right">{row.dpr4}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PriceSearchPage;
