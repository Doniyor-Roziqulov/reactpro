import React from "react";
import { FiSearch } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { VscAccount } from "react-icons/vsc";

const Headerend = () => {
    const { pathname } = useLocation();
    if (
        pathname === "/account" ||
        pathname === "/admin/createproduct" ||
        pathname === "/admin/manageproduct"
    ) {
        return <></>;
    }
    return (
        <section className="py-5">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center justify-between">
                    <div className="border w-[640px] items-center rounded-full  shadow-inner pr-4  hidden lg:flex">
                        <input
                            autoComplete="off"
                            className="w-full rounded-full py-4 bg-transparent pl-7"
                            type="search"
                            name="search"
                            placeholder="Что желаете найти?"
                        />
                        <FiSearch className="text-2xl text-slate-500" />
                    </div>
                    <a className="text-yellow-500" href="#">
                        Вставить список покупок
                    </a>
                    <div className="flex items-center gap-x-8">
                        <NavLink>
                            <IoIosStarOutline className="text-2xl text-slate-700" />
                        </NavLink>
                        <NavLink>
                            <HiOutlineShoppingCart className="text-2xl text-slate-700" />
                        </NavLink>
                        <NavLink to={"/account"}>
                            <VscAccount className="text-2xl text-slate-700" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Headerend;
