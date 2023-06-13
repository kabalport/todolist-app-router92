import React from 'react';
import { Container, Box, Typography, Button } from "@mui/material";

const OrderManage: React.FC = () => {
    return (
        <Container>
            <Box sx={{ py: 4 }}>
                <Typography variant="h1" sx={{ mb: 4 }}>
                    주문 관리
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ flex: '1 0 auto', mr: 2 }}>
                        {/* Add your board management content here */}
                    </Box>
                    <Box sx={{ flexShrink: 0 }}>
                        <Button variant="contained" color="primary">
                            추가하기
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default OrderManage;
