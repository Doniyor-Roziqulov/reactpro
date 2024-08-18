import React, { memo } from "react";
import CartWrapper from "./CartWrapper";

const Cart = ({ products }) => {
    const proitem = products?.map((item) => (
        <CartWrapper key={item.id} item={item} />
    ));
    return (
        <ul className="flex flex-wrap justify-between gap-y-4 md:justify-around gap-x-1">
            {proitem}
        </ul>
    );
};

export default memo(Cart);
