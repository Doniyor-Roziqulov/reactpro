import React, { memo } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Auth = () => {
    let user = "roziqulov";
    return user ? <Outlet /> : <Navigate replace to="/account" />;
};

export default memo(Auth);
