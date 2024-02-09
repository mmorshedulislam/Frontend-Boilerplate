import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../components/layouts/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import DashboardLayout from "../components/layouts/DashboardLayout/DashboardLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/",
                element: <Home />,
            }],

    }, {
        path: "/dashboard",
        element: <DashboardLayout />,
        errorElement: <div>Error</div>,
        children: [
            {
                path: "/dashboard",
                element: <div>Dashboard Home</div>,
            }],
    }])