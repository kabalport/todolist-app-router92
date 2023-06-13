import React, { useState } from 'react';
import {Container, TextField, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const ProductCreate: React.FC = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        desc: "",
        price: 0,
        stockQuantity: 0,
        category: "",
        loginId: "",
        viewCount: 0,
        orderCount: 0
    });

    // State to handle error
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            // Call the API to create the product
            const response = await axios.post('http://localhost:8080/admin/items', product);

            // Log the response data (the newly created product)
            console.log(response.data);

            // If the product is successfully created, navigate back to the product list
            navigate('/shop/manage');
        } catch (error) {
            console.error("Error creating product: ", error);
            // Set the error state with the error message
            setError("상품 추가 에러 발생");
        }
    };

    const handleModalClose = () => {
        setError(null);
    };

    return (
        <Container>
            <h1>상품 추가</h1>
            <form onSubmit={handleSubmit}>
                <TextField name="name" label="이름" onChange={handleChange} required />
                <TextField name="desc" label="설명" onChange={handleChange} required />
                <TextField name="price" label="가격" type="number" onChange={handleChange} required />
                <TextField name="stockQuantity" label="재고 수량" type="number" onChange={handleChange} required />
                <TextField name="category" label="카테고리" onChange={handleChange} required />
                <TextField name="loginId" label="등록자 ID" onChange={handleChange} required />
                <Button type="submit" variant="contained" color="primary">추가</Button>
            </form>
            {/* Show the error modal if there is an error */}
        </Container>
    );
};

export default ProductCreate;
