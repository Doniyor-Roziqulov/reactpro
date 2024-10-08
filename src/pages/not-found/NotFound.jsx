import React, { memo, useEffect } from "react";
import { PiSmileySad } from "react-icons/pi";

const NotFound = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <section className="py-4 lg:pb-11 bg-slate-200 dark:bg-zinc-900">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0 ">
                <div className="flex flex-col items-center">
                    <PiSmileySad className="text-9xl min-[700px]:text-[160px] lg:text-[200px] text-slate-700 dark:text-slate-400" />
                    <h1 className="text-5xl text-slate-600 lg:text-7xl dark:text-slate-400">
                        404
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400">
                        Page not found
                    </p>
                </div>
            </div>
        </section>
    );
};

export default memo(NotFound);
