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
import { memo } from "react";

function App() {
    return (
        <>
            <Header />
            <Headerend />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:proId" element={<Detail />} />
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
        </>
    );
}

export default memo(App);
