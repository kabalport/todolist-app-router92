import React, { useState } from 'react';
import { Box, Button as MuiButton, Card, CardContent, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Post {
    id: number;
    title: string;
    content: string;
}

const initialPosts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    // Add more initial posts if you want...
];

const CommunityPage: React.FC = () => {
    const [posts, setPosts] = useState(initialPosts);
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Typography variant="h3">Community Page</Typography>

            <MuiButton variant="contained" color="primary" onClick={() => navigate('/community/new-post')}>
                Create New Post
            </MuiButton>

            {posts.map((post) => (
                <Card key={post.id} sx={{ width: '80%', marginTop: '20px' }}>
                    <CardContent>
                        <Typography variant="h5">{post.title}</Typography>
                        <Typography variant="body2">{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CommunityPage;
