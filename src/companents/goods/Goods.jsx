import React, { useState, useEffect, memo } from "react";
import { PiPercentBold } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "../../api";
import "./Goods.css";
import Cart from "../cart/Cart";
import Loading from "../loading/Loading";

const Goods = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 4;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products/category/smartphones`, {
                params: {
                    limit: limit * offset,
                },
            })
            .then((res) => {
                setTotal(res.data.total);
                setProducts(res.data.products);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, [offset]);

    return (
        <section className="pb-16 dark:bg-zinc-900">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center gap-x-2 mb-9">
                    <h2 className="text-xl font-bold sm:text-3xl dark:text-white">
                        Скидки{" "}
                    </h2>
                    <PiPercentBold className="text-4xl text-red-500" />
                    <a
                        href="#"
                        className="text-sm font-normal sm:text-base dark:text-white">
                        Все товары в категории
                    </a>
                    <FaArrowRightLong className="dark:text-white" />
                </div>
                <Cart products={products} />
                {loading && <Loading />}

                {limit * offset <= total && (
                    <button
                        onClick={() => setOffset((p) => p + 1)}
                        className="py-2 px-10 mt-3 rounded-3xl bg-yellow-500 dark:bg-yellow-700 text-white dark:text-black block mx-auto transition-all hover:opacity-60">
                        See more
                    </button>
                )}
            </div>
        </section>
    );
};

export default memo(Goods);
