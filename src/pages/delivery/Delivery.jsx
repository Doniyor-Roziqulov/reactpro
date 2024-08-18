import React, { memo, useEffect } from "react";
import Shop from "../../companents/shop/Shop";

const Delivery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <main>
            <Shop />
        </main>
    );
};

export default memo(Delivery);
