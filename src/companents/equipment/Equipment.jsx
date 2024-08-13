import React from "react";
import { equlist } from "../../static";
import { FaArrowRightLong } from "react-icons/fa6";

const lists = equlist?.map((e, inx) => (
    <li
        className="border border-white hover:border hover:border-slate-300 transition-all rounded-lg w-36 min-[430px]:w-48 min-[530px]:w-56 min-[620px]:w-72 min-[700px]:w-[302px]"
        key={inx}>
        <img className="w-full" src={e.img} alt={e.title} />
        <div className="pl-2 w-28 min-[430px]:w-36 min-[530px]:w-44 min-[620px]:w-56 min-[700px]:w-[240px]">
            <strong className="block mt-5 mb-2 text-sm font-bold min-[530px]:text-base min-[700px]:text-lg">
                {e.title}
            </strong>
            <p className="text-xs font-normal mb-4 min-[530px]:text-sm min-[700px]:text-lg">
                {e.text1}
            </p>
            <p className="text-xs font-normal mb-4 min-[530px]:text-sm min-[700px]:text-lg">
                {e.text2}
            </p>
            <p className="text-xs font-normal mb-4 min-[530px]:text-sm min-[700px]:text-lg">
                {e.text3}
            </p>
            <p className="text-xs font-normal mb-4 min-[530px]:text-sm min-[700px]:text-lg">
                {e.text4}
            </p>
            <p className="text-xs font-normal mb-4 min-[530px]:text-sm min-[700px]:text-lg">
                {e.text5}
            </p>
            <div className="flex items-center gap-x-1">
                <a className="text-xs font-normal min-[700px]:text-lg" href="#">
                    Больше
                </a>
                <FaArrowRightLong />
            </div>
        </div>
    </li>
));

const Equipment = () => {
    return (
        <section className="pt-5 pb-10">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <h1 className="text-2xl font-bold mb-10 min-[700px]:text-4xl">
                    Каталог
                </h1>
                <ul className="flex flex-wrap justify-between gap-y-12 items-start min-[350px]:justify-around gap-x-1 min-[1260px]:gap-x-0:">
                    {lists}
                </ul>
            </div>
        </section>
    );
};

export default Equipment;
