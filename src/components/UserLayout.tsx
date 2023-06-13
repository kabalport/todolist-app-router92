import { Outlet } from "react-router";
import UserHeader from "./UserHeader";

const UserLayout = () => {
  return (
    <div className="container">
      <UserHeader />
      <Outlet />

    </div>
  );
};

export default UserLayout;
