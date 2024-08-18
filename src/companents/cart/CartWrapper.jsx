import React, { memo } from "react";
import { BsCartPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWrapper = ({ item }) => {
    return (
        <li className="good__item sm:w-72 relative pt-3 pb-16 border border-white transition-all rounded-3xl hover:bg-slate-50 hover:border hover:border-slate-200">
            <Link to={`/product/${item.id}`}>
                <img
                    className="w-full h-40 sm:h-56 object-contain"
                    src={item.images[0]}
                    alt={item.title}
                />
            </Link>
            <div className="px-3">
                <Link to={`/product/${item.id}`}>
                    <h3 className="mb-2 text-ellipsis overflow-hidden whitespace-nowrap max-w-full text-sm md:text-lg">
                        {item.title}
                    </h3>
                </Link>
                <p
                    title={item.description}
                    className="text-xs md:text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                    {item.description}
                </p>
                <p className="text-xs md:text-sm">117x190 см</p>
                <p className="text-xl md:text-3xl font-bold flex items-end gap-x-2">
                    {item.price} Br
                </p>
            </div>
            <div className="flex w-full justify-between items-center px-3 absolute good__box">
                <select className="border rounded-3xl flex items-center">
                    <option value="1">1 шт.</option>
                    <option value="1">2 шт.</option>
                    <option value="1">3 шт.</option>
                </select>
                <button className="w-11 h-11 rounded-full bg-yellow-500 flex items-center justify-center">
                    <BsCartPlus className="text-xl text-white" />
                </button>
            </div>
        </li>
    );
};

export default memo(CartWrapper);
