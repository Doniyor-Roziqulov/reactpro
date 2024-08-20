import React from "react";
import { useStateValue } from "../../context";
import Cart from "../../companents/cart/Cart";

const Wishlist = () => {
    const [data, dispatch] = useStateValue();
    return (
        <section className="pt-5 pb-6 dark:bg-zinc-900">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <h2 className="text-3xl font-bold mb-3 dark:text-white">
                    Мои желания
                </h2>
                <Cart products={data.wishlist} />
            </div>
        </section>
    );
};

export default Wishlist;
