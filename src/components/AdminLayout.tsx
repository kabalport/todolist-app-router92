import { Outlet } from "react-router";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
    return (
        <div className="container">
            <AdminHeader />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
