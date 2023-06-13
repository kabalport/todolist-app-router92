import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import TodoList from "./pages/TodoList";
import AddTodo from "./pages/AddTodo";
import EditTodo from "./pages/EditTodo";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/AdminLayout";
import AdminManage from "./pages/admin/MemberManage/AdminManage";
import AdminRegisterPage from "./pages/admin/MemberManage/AdminRegisterPage";
import AdminDashboardPage from "./pages/admin/AdminDashboard/AdminDashboardPage";
import BoardManage from "./pages/admin/BoardManage/BoardManage";
import ShopManage from "./pages/admin/ItemManage/ShopManage";
import OrderManage from "./pages/admin/OrderManage/OrderManage";

import { CallbacksType, StatesType } from "./AppContainer";
import Loading from "./components/Loading";

type PropsType = {
  states: StatesType;
  callbacks: CallbacksType;
};

const App = ({ states, callbacks }: PropsType) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="todos/add" element={<AddTodo />} />
          <Route path="todos/edit/:id" element={<EditTodo />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="/admin/member/manage" element={<AdminManage />} />
          <Route path="/admin/manage/register" element={<AdminRegisterPage />} />
          <Route path="/admin/item/manage" element={<ShopManage />} />
          <Route path="/admin/board/manage" element={<BoardManage />} />
          <Route path="/admin/order/manage" element={<OrderManage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
