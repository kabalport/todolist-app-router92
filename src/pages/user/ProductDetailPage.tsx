import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Card, CardContent, CardMedia, Typography, CircularProgress, Button as MuiButton } from '@mui/material';
import { styled } from "@mui/system";
import { useCart } from '../../../contexts/CartContext';


interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

const ProductDetailPage: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Failed to fetch product data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) {
        return <CircularProgress />;
    }

    if (!product) {
        return <Typography variant="h4">No Product Found</Typography>;
    }

    const handleAddToCart = () => {
        if (product) {
            addToCart(product);
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="345"
                    image={product.image}
                    alt={product.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="h6">
                        {product.price}원
                    </Typography>
                </CardContent>
            </Card>
            <MuiButton variant="contained" color="primary" onClick={handleAddToCart}>Add to Cart</MuiButton>
        </Box>
    );
};

export default ProductDetailPage;
