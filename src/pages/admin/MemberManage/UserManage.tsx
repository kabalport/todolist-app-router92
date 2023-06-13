import React, { useState } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Box, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface User {
    id: number;
    loginId: string;
    pw: string;
    userName: string;
    birthdate: string;
    gender: string;
    tel: string;
    addr: string;
    email: string;
    orders: any[];
    boards: any[];
}

const users: User[] = [
    {
        id: 1,
        loginId: "logintest1",
        pw: "1234",
        userName: "join1",
        birthdate: "2023-05-27",
        gender: "남",
        tel: "010-1234-1234",
        addr: "전북 남원시 가방뜰길",
        email: "test@gmail.com",
        orders: [],
        boards: [],
    },
    // Add more users as needed
];

const UserDetail: React.FC<{ user: User; onEdit: () => void; onDelete: () => void }> = ({ user, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleRetrieve = () => {
        console.log("Retrieving user:", user);
        // Implement retrieve logic here
    };

    return (
        <Box sx={{ width: 400, padding: 4, backgroundColor: 'white', margin: 'auto', marginTop: '10%', outline: 'none' }}>
            <div>
                <h2>{user.userName}'s Details</h2>
                <p>ID: {user.id}</p>
                <p>Login ID: {user.loginId}</p>
                <p>Name: {user.userName}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.tel}</p>
                <p>Address: {user.addr}</p>
                <p>Gender: {user.gender}</p>
                <p>Birthdate: {user.birthdate}</p>
                <button onClick={handleRetrieve}>Retrieve User</button>
                <button onClick={onEdit}>Edit User</button>
                <button onClick={onDelete}>Delete User</button>
            </div>
        </Box>
    );
};

const UserManage: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleRowClick = (user: User) => {
        navigate(`/admin/user/${user.id}`);
    };

    const handleRegister = () => {
        console.log("User Registration");
        // Implement user registration logic here
    };

    const handleClose = () => {
        setSelectedUser(null);
        setIsDetailModalOpen(false);
    };

    return (
        <Container>
            <h1>사용자 관리</h1>
            <Button variant="contained" color="primary" onClick={handleRegister}>등록</Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Login ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Birthdate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id} onClick={() => handleRowClick(user)}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.loginId}</TableCell>
                                <TableCell>{user.userName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.tel}</TableCell>
                                <TableCell>{user.addr}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                                <TableCell>{user.birthdate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default UserManage;
