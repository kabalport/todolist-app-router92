import React, { useState, useEffect } from 'react';
import {Container, Typography, Paper, TextField, Button, Dialog, DialogTitle, DialogActions} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

interface Admin {
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

const AdminDetail: React.FC = () => {
    const { loginId } = useParams();
    const navigate = useNavigate();

    const [admin, setAdmin] = useState<Admin>({
        id: 1,
        loginId: "logintest1",
        pw: "4321",
        userName: "join1",
        birthdate: "2023-05-27",
        gender: "남",
        tel: "010-4321-4321",
        addr: "전북 남원시 가방뜰길",
        email: "test2@gmail.com",
        orders: [],
        boards: []
    });
    const [loading, setLoading] = useState<boolean>(true);
    const [editing, setEditing] = useState<boolean>(false);
    const [errorModalOpen, setErrorModalOpen] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        axios.get(`http://localhost:8080/user/members/${loginId}`)
            .then((response) => {
                setAdmin(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setErrorMessage(`Error fetching data: ${error}`);
                setErrorModalOpen(true);
                setLoading(false);
            });
    }, [loginId]);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        axios.put(`http://localhost:8080/user/members/${loginId}`, {
            ...admin
        })
            .then((response) => {
                setAdmin(response.data);
                setEditing(false);
            })
            .catch((error) => {
                setErrorMessage(`Error updating data: ${error}`);
                setErrorModalOpen(true);
            });
    };

    const handleDelete = () => {
        axios.delete(`/api/members/${loginId}`)
            .then(() => {
                navigate('/admin');
            })
            .catch((error) => {
                setErrorMessage(`Error deleting data: ${error}`);
                setErrorModalOpen(true);
            });
    };

    const handleCloseErrorModal = () => {
        setErrorModalOpen(false);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <h1>관리자 상세 정보</h1>
            <Paper style={{ padding: '1rem' }}>
                {editing ? (
                    <>
                        <TextField label="Login ID" defaultValue={admin.loginId} onChange={e => setAdmin({...admin, loginId: e.target.value})} />
                        <TextField label="Username" defaultValue={admin.userName} onChange={e => setAdmin({...admin, userName: e.target.value})} />
                        <TextField label="Email" defaultValue={admin.email} onChange={e => setAdmin({...admin, email: e.target.value})} />
                        <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">ID: {admin.id}</Typography>
                        <Typography variant="h6">Login ID: {admin.loginId}</Typography>
                        <Typography variant="h6">Username: {admin.userName}</Typography>
                        <Typography variant="h6">Email: {admin.email}</Typography>
                        <Button variant="contained" color="primary" onClick={handleEdit}>Edit</Button>
                        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                    </>
                )}
            </Paper>

            <Dialog
                open={errorModalOpen}
                onClose={handleCloseErrorModal}
            >
                <DialogTitle>Error</DialogTitle>
                <div>{errorMessage}</div>
                <DialogActions>
                    <Button onClick={handleCloseErrorModal}>Close</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default AdminDetail;
