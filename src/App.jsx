import Footer from "./companents/footer/Footer";
import Header from "./companents/header/Header";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import Delivery from "./pages/delivery/Delivery";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/not-found/NotFound";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
