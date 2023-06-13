// src/components/pages/AdminLoginPage.tsx

import React, {useState} from 'react';

import {useNavigate} from "react-router-dom";

import {Box, CircularProgress, Grow, Paper, Slide, TextField, Typography, Button} from "@mui/material";
import axios from "axios";

const AdminLoginPage: React.FC = () => {
    const [loginId, setLoginId] = useState("");
    const [pw, setPw] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setIsLoading(true);

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login", { loginId, pw });
            console.log(response.data);

            // Save the username to localStorage

            // Save the accessToken to localStorage
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("refreshToken", response.data.refreshToken);

            const decodeToken = (token: string): string | null => {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const decodedData = JSON.parse(window.atob(base64));

                return decodedData?.sub || null;
            };

// 사용 예시
            const accessToken = response.data.accessToken;
            const userId = decodeToken(accessToken);
            console.log(userId);
            localStorage.setItem("userId", userId || "");

            // Redirect to the home page
            navigate(-1);
        } catch (error) {
            console.error(error);
            // Handle the error appropriately...
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#1f2437"
        >
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
                <Paper elevation={3} sx={{ padding: 3, width: '380px' }}>
                    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                        농산커 로그인
                    </Typography>
                    <Typography variant="subtitle2" align="center" gutterBottom>
                        로그인하고, 다양한 서비스를 이용하세요.
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grow in={true}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="아이디"
                                    variant="outlined"
                                    value={loginId}
                                    onChange={(e) => setLoginId(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '100ms'}}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    type="password"
                                    label="패스워드"
                                    variant="outlined"
                                    value={pw}
                                    onChange={(e) => setPw(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Box mb={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit" disabled={isLoading}>
                                {isLoading ? <CircularProgress size={24} /> : "로그인"}
                            </Button>
                        </Box>
                        <Box mt={2}>
                            <Button variant="outlined" color="secondary" fullWidth onClick={() => navigate(-1)}>
                                이전화면으로 돌아가기
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </Slide>
        </Box>
    );
};

export default AdminLoginPage;
