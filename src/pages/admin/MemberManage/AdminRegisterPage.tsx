import React, { useState } from 'react';
import { Container, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
    loginId: string;
    pw: string;
    userName: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    role: "USER" | "ADMIN";
}

const AdminRegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState<Admin>({
        loginId: "",
        pw: "",
        userName: "",
        birthdate: "",
        gender: "",
        tel: "",
        addr: "",
        email: "",
        role: "USER"
    });

    const handleSubmit = async () => {
        try {
            // API 호출하여 새로운 관리자 등록
            const response = await axios.post("http://localhost:8080/api/auth/signup", admin);
            const newAdmin = response.data;
            console.log(admin)
            // 등록이 성공적으로 이루어지면 관리자 목록 페이지로 이동
            navigate('/admin');
        } catch (error) {
            // 오류 처리
            console.error(error);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAdmin({
            ...admin,
            [event.target.name]: event.target.value
        });
    };

    return (
        <Container>
            <h1>관리자 등록</h1>
            <form noValidate autoComplete="off">
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <TextField label="Login ID" name="loginId" value={admin.loginId} onChange={handleChange} />
                    <TextField label="Password" name="pw" value={admin.pw} onChange={handleChange} type="password"/>
                    <TextField label="Username" name="userName" value={admin.userName} onChange={handleChange} />
                    <TextField label="Birthdate" name="birthdate" value={admin.birthdate} onChange={handleChange} type="date"/>
                    <TextField label="Gender" name="gender" value={admin.gender} onChange={handleChange} />
                    <TextField label="Phone Number" name="tel" value={admin.tel} onChange={handleChange} />
                    <TextField label="Address" name="addr" value={admin.addr} onChange={handleChange} />
                    <TextField label="Email" name="email" value={admin.email} onChange={handleChange} />
                    <TextField
                        label="Role"
                        name="role"
                        select
                        value={admin.role}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                    >
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                    </TextField>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>등록</Button>
                </Box>
            </form>
        </Container>
    );
};

export default AdminRegisterPage;
