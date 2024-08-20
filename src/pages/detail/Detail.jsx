import axios from "../../api";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import star from "../../images/star.svg";
import drame from "../../images/drame.svg";
import Cart from "../../companents/cart/Cart";

const Detail = () => {
    const { proId } = useParams();
    const [products, setProducts] = useState(null);
    const [data, setData] = useState(null);
    const [image, setImage] = useState(0);
    const [inc, setInc] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [proId]);

    useEffect(() => {
        axios
            .get(`/products/${proId}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [proId]);
    useEffect(() => {
        axios
            .get(`/products/category/${data?.category}`, {
                params: { limit: 4 },
            })
            .then((res) => setProducts(res.data.products))
            .catch((err) => console.log(err));
    }, [data, proId]);

    return (
        <section className="pt-7 pb-14 dark:bg-zinc-900 dark:text-white">
            <div className="container  max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex flex-col items-center justify-between gap-y-3 sm:flex-row sm:items-start gap-x-3 pb-4">
                    <div className="w-11/12 ">
                        <div className="sticky top-0 left-0 mb-4">
                            <img
                                className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] object-contain bg-slate-100 dark:bg-neutral-800 border border-slate-300"
                                src={data?.images[`${image}`]}
                                alt={data?.title}
                            />
                            <div className="flex gap-x-5 mt-5">
                                {data?.images?.map((item, inx) => (
                                    <img
                                        onClick={(e) => setImage(inx)}
                                        key={inx}
                                        className="w-20 h-20 object-contain dark:bg-neutral-800 bg-slate-100 border border-slate-300 cursor-pointer hover:border-red-300"
                                        src={item}
                                        alt="image"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[800px]">
                        <h2 className="text-base md:text-lg font-bold mb-3">
                            {data?.title}
                        </h2>
                        <span className="flex gap-x-2 text-base md:text-lg mb-3 items-center">
                            <strong>Арт. 890.321.44</strong>
                            <p>/</p>
                            <p className="text-slate-500 text-sm">
                                Под заказ на 4.04.2021
                            </p>
                        </span>
                        <p className="text-sm lg:text-lg text-slate-500 mb-5">
                            {data?.description}
                        </p>
                        <div className="flex items-end gap-x-2 lg:gap-x-28 mb-3">
                            <div className="flex items-end gap-x-2">
                                <p className="text-3xl font-bold">
                                    {Math.floor(data?.price * inc * 10000) /
                                        10000}
                                </p>
                                <p className="font-bold">Br</p>
                            </div>
                            <div className="flex gap-x-4 items-center m-0">
                                <button
                                    className="border-2 border-slate-400 rounded-md text-slate-400 font-bold w-5 h-5 flex items-center justify-center"
                                    disabled={inc <= 1}
                                    onClick={() => setInc(inc - 1)}>
                                    -
                                </button>
                                <p className="text-lg font-bold">{inc}</p>
                                <button
                                    className="border-2 border-slate-400 rounded-md text-slate-400 font-bold w-5 h-5 flex items-center justify-center"
                                    onClick={() => setInc(inc + 1)}>
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-x-3 xl:gap-x-6">
                            <button className="flex items-center text-white bg-yellow-600 py-3 px-3 xl:px-9 rounded-full gap-x-1">
                                <p className="text-xs lg:text-lg">
                                    Добаить в корзину
                                </p>
                                <GrAdd />
                            </button>
                            <button>
                                <img src={star} alt="Star" />
                            </button>
                            <button>
                                <img src={drame} alt="Star" />
                            </button>
                        </div>
                    </div>
                </div>
                <Cart products={products} />
            </div>
        </section>
    );
};

export default memo(Detail);
