import React, { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GoFileDirectory } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { MdManageHistory } from "react-icons/md";

const Admin = () => {
    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-gray-600 pt-4 relative">
                <div className="flex items-center gap-x-4 pl-5   border-b cursor-pointer">
                    <GoFileDirectory className="text-xl text-white" />
                    <h2 className="text-white text-2xl pb-2">Admin</h2>
                </div>
                <ul className="create-list absolute top-[60px]">
                    <li className="text-white text-xl py-3 pl-24 flex items-center gap-x-4">
                        <IoCreateOutline />
                        <NavLink to={"/admin/createproduct"}>Create</NavLink>
                    </li>
                    <li className="text-white text-xl pl-24 flex items-center gap-x-4">
                        <MdManageHistory />
                        <NavLink to={"/admin/manageproduct"}>Manage</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
};

export default memo(Admin);
