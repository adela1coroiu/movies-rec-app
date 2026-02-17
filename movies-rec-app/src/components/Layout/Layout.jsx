import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function Layout() {
    return (
        <div className="app-container">
            <Header />
            <main className="main-container">
                <NavBar />
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;