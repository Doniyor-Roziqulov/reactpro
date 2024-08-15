import React, { useState } from "react";
import { navbarlink } from "../../static";
import logo from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import "./Header.css";
import { useLocation } from "react-router-dom";

const navbar = navbarlink?.map((e, index) => (
    <li key={index}>
        <NavLink
            to={e.to}
            className="text-lg border-b border-slate-100"
            href="#">
            {e.name}
        </NavLink>
    </li>
));

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    if (pathname === "/account") {
        return <></>;
    }
    return (
        <header className="py-7 bg-slate-100 site-header relative">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center justify-between">
                    <NavLink className="logo" to={"/"}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className={menuOpen ? "open" : "close"}>
                        <nav>
                            <ul className="flex gap-x-8 mb-3">{navbar}</ul>
                        </nav>
                        <div className="flex-col items-end lg:flex">
                            <div className="items-center gap-x-2 flex flex-col lg:flex-row">
                                <a
                                    className="text-base font-normal"
                                    href="tel:+3757364636472">
                                    + 375 736 463 64 72
                                </a>
                                <p className="text-slate-400">/</p>
                                <a
                                    className="text-base font-normal"
                                    href="tel:+3757364636472">
                                    + 375 736 463 64 72
                                </a>
                            </div>
                            <p className="text-sm text-slate-400">
                                Заказать звонок
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                        className="lg:hidden">
                        {menuOpen ? (
                            <IoClose className="text-2xl" />
                        ) : (
                            <RxHamburgerMenu className="text-2xl" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
