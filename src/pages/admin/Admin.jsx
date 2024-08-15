import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
    return (
        <div className="flex">
            <div className="w-80 min-h-screen bg-slate-500">
                <h2>Admin</h2>
                <ul>
                    <li>
                        <NavLink to={"/admin/createproduct"}>Create</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/admin/manageproduct"}>Manage</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet />
            </div>
        </div>
    );
};

export default Admin;
