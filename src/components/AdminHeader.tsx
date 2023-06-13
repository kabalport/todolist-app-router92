import { useState } from "react";
import { Link } from "react-router-dom";

const AdminHeader = () => {
    let [isNavShow, setIsNavShow] = useState<boolean>(false);
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <span className="navbar-brand ps-2">농산커 관리자</span>
            <button className="navbar-toggler" type="button" onClick={() => setIsNavShow(!isNavShow)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={isNavShow ? "collapse navbar-collapse show" : "collapse navbar-collapse"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            사용자 홈
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin">
                            대시보드
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/member/manage">
                            회원관리
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/item/manage">
                            상품관리
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/board/manage">
                            게시판관리
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/order/manage">
                            주문관리
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todos">
                            todo
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default AdminHeader;
