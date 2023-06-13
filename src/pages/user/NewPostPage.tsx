import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NewPostPage: React.FC = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handlePost = () => {
        if (title && content) {
            // Post the data to the server here...
            // After posting, navigate back to the community page
            navigate('/community');
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Typography variant="h3">Create a New Post</Typography>

            <TextField
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
                variant="outlined"
                label="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                multiline
                rows={4}
            />

            <Button variant="contained" color="primary" onClick={handlePost}>
                Post
            </Button>
        </Box>
    );
};

export default NewPostPage;
