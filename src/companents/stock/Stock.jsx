import React, { useState, useEffect, memo } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import axios from "../../api";
import "./Srock.css";
import Cart from "../cart/Cart";
import Loading from "../loading/Loading";

const Stock = () => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [selectCategory, setSelectCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(1);
    const [total, setTotal] = useState(0);
    const limit = 4;

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=8`)
            .then((res) => res.json())
            .then((data) => {
                setSearch(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const [data, setData] = useState([]);
    const [search, setSearch] = useState([]);

    const searchForm = (value) => {
        const res = search.products.filter((f) =>
            f.title.toLowerCase().includes(value)
        );
        setData(res);
        if (value === "") {
            setData([]);
        }
    };

    useEffect(() => {
        axios
            .get(`/products/category-list`)
            .then((res) => setCategories(res.data))
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`/products${selectCategory}`, {
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
    }, [offset, selectCategory]);

    const categoryItem = categories?.map((category) => (
        <option
            className="font-semibold"
            key={category}
            value={`/category/${category}`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
    ));

    return (
        <section className="pb-16 dark:bg-zinc-900">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex items-center gap-x-1 sm:gap-x-3 mb-9">
                    <h2 className="text-xl font-bold sm:text-3xl dark:text-white">
                        Товары в наличии
                    </h2>
                    <a href="#" className="text-sm font-normal dark:text-white">
                        Все товары в категории
                    </a>
                    <FaArrowRightLong className="dark:text-white" />
                </div>
                <div className="flex flex-col gap-x-4 md:flex-row">
                    <select
                        className="border py-2 w-60 md:w-80 px-4 mb-4 rounded-3xl shadow-inner bg-slate-50 dark:bg-neutral-900 dark:text-white font-semibold "
                        value={selectCategory}
                        onChange={(e) => setSelectCategory(e.target.value)}>
                        <option value="">All</option>
                        {categoryItem}
                    </select>
                    <div className="relative">
                        <div className="flex items-center justify-between border  w-60 md:w-80 mb-4 rounded-3xl shadow-inner bg-slate-50 dark:bg-neutral-900 font-semibold relative">
                            <input
                                onChange={(e) => searchForm(e.target.value)}
                                className="w-full py-2 bg-slate-50  dark:bg-neutral-900 dark:text-white rounded-3xl pl-7 pr-3 shadow-inner"
                                autoComplete="off"
                                type="search"
                                name="search"
                                placeholder="Что желаете найти?"
                            />
                            <IoSearch className="absolute left-2 top-[13px] text-slate-600" />
                        </div>
                        <div className="border border-t-0 border-b-0 w-full absolute top-11 left-0 z-10 bg-slate-50 rounded-3xl">
                            {data.map((d, i) => (
                                <div
                                    className="flex items-center last:border-b-0 py-2 pl-2 cursor-pointer hover:bg-slate-200 hover:rounded-3xl border-b"
                                    key={i}>
                                    <img
                                        className="w-8 h-8 object-contain"
                                        src={d.images[0]}
                                        alt="images"
                                    />
                                    <h3 className="pl-2">{d.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Cart products={products} />
                {loading && <Loading />}
                {limit * offset <= total && (
                    <button
                        onClick={() => setOffset((p) => p + 1)}
                        className="py-2 px-10 mt-3 rounded-3xl bg-yellow-500 dark:bg-yellow-700 dark:text-black text-white block mx-auto transition-all hover:opacity-60">
                        See more
                    </button>
                )}
            </div>
        </section>
    );
};

export default memo(Stock);
