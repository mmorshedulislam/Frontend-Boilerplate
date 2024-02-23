import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <>
            <div className="border">Navbar</div>
            <div className="flex">
                <div className="w-[20%] border">
                    Sidebar
                </div>
                <div className="w-[80%] border">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AdminLayout;