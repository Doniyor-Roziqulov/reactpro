import React, { memo } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context";
import { FaRegStar } from "react-icons/fa6";

const CartWrapper = ({ item }) => {
    const [_, dispatch] = useStateValue();
    return (
        <li className="good__item sm:w-72 relative pt-3 pb-8 border border-white transition-all rounded-3xl overflow-hidden hover:bg-slate-50 hover:border hover:border-slate-200 dark:hover:bg-neutral-800 dark:border-neutral-700">
            <Link to={`/product/${item.id}`}>
                <img
                    className="w-full h-40 sm:h-56 object-contain hover:scale-105"
                    src={item.images[0]}
                    alt={item.title}
                />
            </Link>
            <div className="px-3">
                <Link to={`/product/${item.id}`}>
                    <h3 className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap max-w-full text-sm md:text-lg dark:text-white">
                        {item.title}
                    </h3>
                </Link>
                <p
                    title={item.description}
                    className="text-xs md:text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full dark:text-white">
                    {item.description}
                </p>
                <p className="text-xs md:text-sm dark:text-white">117x190 см</p>
                <p className="text-xl md:text-3xl font-bold flex items-end gap-x-2 dark:text-white">
                    {item.price} Br
                </p>
            </div>
            <div className="flex w-full justify-between items-center px-3 absolute good__box">
                <select className="border rounded-3xl flex items-center dark:bg-black dark:text-white">
                    <option value="1">1 шт.</option>
                    <option value="1">2 шт.</option>
                    <option value="1">3 шт.</option>
                </select>
                <button className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center">
                    <BsCartPlus className="text-xl text-white" />
                </button>
            </div>
            <button
                onClick={() =>
                    dispatch({ type: "TOGGLE_WISHLIST", payload: item })
                }>
                <FaRegStar className="text-black text-2xl absolute top-7 right-7 dark:hover:text-red-500 hover:text-red-500 active:scale-125 dark:text-white" />
            </button>
        </li>
    );
};

export default memo(CartWrapper);
