import { Outlet } from "react-router-dom";
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default HomeLayout;