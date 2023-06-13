// src/components/pages/LogoutPage.tsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogoutPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Remove user data from local storage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userId');

        // Redirect to login page
        navigate('/admin');
    }, [navigate]);

    return null;  // This component doesn't render anything
};

export default AdminLogoutPage;
