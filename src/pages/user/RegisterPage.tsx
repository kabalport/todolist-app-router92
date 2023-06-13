import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Paper, Box, Typography, Button, Container, Slide, Grow, InputLabel, FormControl, Select, MenuItem, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    const [loginId, setLoginId] = useState("");
    const [pw, setPw] = useState("");
    const [userName, setUserName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [tel, setTel] = useState("");
    const [addr, setAddr] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        // Construct the request body
        const requestBody = {
            loginId,
            pw,
            userName,
            birthdate,
            gender,
            tel,
            addr,
            email,
            role
        };

        // Send a POST request to the server
        try {
            const response = await axios.post("http://localhost:8080/api/members/join", requestBody);
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.error(error);
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
                        농산커 회원가입
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
                        <Grow in={true} style={{ transitionDelay: '50ms' }}>
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
                        <Grow in={true} style={{ transitionDelay: '100ms' }}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="이름"
                                    variant="outlined"
                                    value={userName}
                                    onChange={(e) => setUserName(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '150ms' }}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="생년월일"
                                    type="date"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    value={birthdate}
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '200ms' }}>
                            <Box mb={2}>
                                <FormControl fullWidth>
                                    <InputLabel>성별</InputLabel>
                                    <Select
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <MenuItem value="남">남</MenuItem>
                                        <MenuItem value="여">여</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '250ms' }}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="연락처"
                                    variant="outlined"
                                    value={tel}
                                    onChange={(e) => setTel(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '300ms' }}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="주소"
                                    variant="outlined"
                                    value={addr}
                                    onChange={(e) => setAddr(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        <Grow in={true} style={{ transitionDelay: '350ms' }}>
                            <Box mb={2}>
                                <TextField
                                    fullWidth
                                    label="이메일"
                                    type="email"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Box>
                        </Grow>
                        {/*<Grow in={true} style={{ transitionDelay: '350ms' }}>*/}
                        {/*    <Box mb={2}>*/}
                        {/*        <TextField*/}
                        {/*            fullWidth*/}
                        {/*            label="권한"*/}
                        {/*            type="role"*/}
                        {/*            variant="outlined"*/}
                        {/*            value={role}*/}
                        {/*            onChange={(e) => setRole(e.target.value)}*/}
                        {/*            required*/}
                        {/*        />*/}
                        {/*    </Box>*/}
                        {/*</Grow>*/}
                        <Grow in={true} style={{ transitionDelay: '200ms' }}>
                            <Box mb={2}>
                                <FormControl fullWidth>
                                    <InputLabel>권한</InputLabel>
                                    <Select
                                        value={role}
                                        onChange={(e) => setRole(e.target.value)}
                                    >
                                        <MenuItem value="USER">사용자</MenuItem>
                                        <MenuItem value="ADMIN">관리자</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grow>


                        <Box mb={2}>
                            <Button variant="contained" color="primary" fullWidth type="submit" disabled={isLoading}>
                                {isLoading ? <CircularProgress size={24} /> : "회원가입"}
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

export default RegisterPage;
