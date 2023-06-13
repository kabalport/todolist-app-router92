import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MyPage: React.FC = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName');

    if (!userName) {
        navigate('/login');
        return null;
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Typography variant="h3">My Page</Typography>
            <Typography variant="h5">Welcome, {userName}!</Typography>
        </Box>
    );
};

export default MyPage;
