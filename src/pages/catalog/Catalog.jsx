import React, { memo, useEffect } from "react";
import Equipment from "../../companents/equipment/Equipment";

const Catalog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Equipment />
        </main>
    );
};

export default memo(Catalog);
