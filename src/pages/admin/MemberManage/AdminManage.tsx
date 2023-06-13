import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
    id: number;
    loginId: string;
    pw: string;
    username: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    orders: any[];
    boards: any[];
}

const AdminManage: React.FC = () => {
    const navigate = useNavigate();
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        axios.get(`http://localhost:8080/user/members/list`)
            .then((response) => {
                // Ensure response.data is an array
                if (Array.isArray(response.data)) {
                    setAdmins(response.data);
                } else {
                    console.error(`Unexpected server response: ${JSON.stringify(response.data)}`);
                    setError(`Unexpected server response.`);
                }
            })
            .catch((error) => {
                console.error(`Error fetching data: ${error}`);
                setError(`Error fetching data: ${error}`);
            });
    }, []);


    return (
        <Container>
            <h1>관리자 관리</h1>
            <Button variant="contained" color="primary" onClick={() => navigate('/admin/register')}>관리자 등록</Button>
            {error ? (
                <p>{error}</p>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Login ID</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Detail</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {admins.length > 0 ? (
                                admins.map((admin: Admin) => (
                                    <TableRow key={admin.id}>
                                        <TableCell>{admin.id}</TableCell>
                                        <TableCell>{admin.loginId}</TableCell>
                                        <TableCell>{admin.username}</TableCell>
                                        <TableCell>{admin.email}</TableCell>
                                        <TableCell>
                                            <Button variant="contained" color="primary" onClick={() => navigate(`/admin/admin-manage/${admin.loginId}`)}>Detail</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5}>No admins found</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Container>
    );
};

export default AdminManage;
