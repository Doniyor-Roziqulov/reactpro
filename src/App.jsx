import Footer from "./companents/footer/Footer";
import Header from "./companents/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Delivery from "./pages/delivery/Delivery";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";
import Detail from "./pages/detail/Detail";
import Admin from "./pages/admin/Admin";
import CreateProduct from "./pages/admin/CreateProduct";
import ManageProduct from "./pages/admin/ManageProduct";
import Headerend from "./companents/headerend/Headerend";
import Login from "./pages/login/Login";
import Auth from "./pages/auth/Auth";
import { memo, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Wishlist from "./pages/wishlist/Wishlist";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return (
        <div className={`${darkMode && "dark"}`}>
            <Header />
            <Headerend />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:proId" element={<Detail />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/" element={<Auth />}>
                    <Route path="admin" element={<Admin />}>
                        <Route
                            path="createproduct"
                            element={<CreateProduct />}
                        />
                        <Route
                            path="manageproduct"
                            element={<ManageProduct />}
                        />
                    </Route>
                </Route>
                <Route path="/account" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <button
                onClick={toggleDarkMode}
                className="fixed flex items-center justify-center w-12 h-12 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black">
                {darkMode ? (
                    <FiSun className="text-xl" />
                ) : (
                    <FiMoon className="text-xl" />
                )}
            </button>
        </div>
    );
}

export default memo(App);
