import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button, Container} from "@mui/material";
import axios from "axios";

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

const UserDetail: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUserById = async (id: string) => {
            try {
                const response = await axios.get(`your-api-endpoint/users/${id}`);
                setUser(response.data);
            } catch (error) {
                console.error("Failed to fetch user", error);
                setError("데이터를 가져오지 못하였습니다.");
            }
        };

        if (id) {
            getUserById(id);
        }
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`your-api-endpoint/users/${id}`);
            navigate('/admin/user-manage');
        } catch (error) {
            console.error("Failed to delete user", error);
        }
    };

    const handleEdit = async (updatedUser: User) => {
        try {
            const response = await axios.put(`your-api-endpoint/users/${id}`, updatedUser);
            setUser(response.data);
        } catch (error) {
            console.error("Failed to update user", error);
        }
    };

    if (error) return <div>{error}</div>;
    if (!user) return <div>Loading...</div>;

    return (
        <Container>
            <h1>사용자 상세 정보</h1>
            {/* Show your user details */}
            <Button variant="outlined" onClick={() => handleEdit(user)}>Edit</Button>
            <Button variant="outlined" onClick={handleDelete}>Delete</Button>
        </Container>
    );
};

export default UserDetail;
