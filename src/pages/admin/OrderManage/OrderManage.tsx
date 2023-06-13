import React from 'react';
import { Container, Box, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom";
import OrderItem from "./OrderItem";
const OrderManage: React.FC = () => {
    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <Typography variant="h5" sx={{ mb: 4 }}>
                    주문 관리
                </Typography>
                <div className="row">
                    <div className="col p-3">
                        <Link className="btn btn-primary" to="/todos/add">
                            주문 추가
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">{OrderItem}</ul>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default OrderManage;
