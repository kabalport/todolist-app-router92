// src/components/pages/AdminDashboardPage.tsx

import React from 'react';
import {Container} from "@mui/material";

const AdminDashboardPage: React.FC = () => {
    return (
        <Container>
            <h1>관리자 대시보드</h1>
            <h2>전체 사용자 수: </h2>
            <h2>전체 관리자 수: </h2>
            <h2>전체 상품 수: </h2>
            <h2>전체 게시판 수: </h2>
            {/* Other components... */}
        </Container>
    );
};

export default AdminDashboardPage;
