import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Account = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    return (
        <section>
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex w-full flex-col items-center max-w-[450px] mx-auto my-auto border-2 py-2 rounded-md">
                        <h2 className="text-2xl md:text-4xl font-bold mb-32">
                            Личный кабинет
                        </h2>
                        <form
                            className="flex flex-col items-center gap-y-4 mb-6 w-full"
                            action="">
                            <input
                                required
                                type="text"
                                className="rounded-full py-3 pl-5 shadow-inner border w-full"
                                placeholder="Usurname"
                            />
                            <input
                                required
                                type="password"
                                className="rounded-full py-3 pl-5 shadow-inner border w-full"
                                placeholder="Пароль"
                            />
                            <button className="text-white py-3 w-full rounded-full bg-yellow-600">
                                Сохранить
                            </button>
                        </form>
                        <div className="flex items-start w-full">
                            <a className="text-lg text-slate-600" href="#">
                                Выход
                            </a>
                        </div>
                        <p className="text-lg font-bold">
                            Мы в социальных сетях!
                        </p>
                        <div className="flex gap-x-5">
                            <button
                                className="py-2 px-4 rounded-3xl bg-gray-500 border text-white"
                                onClick={() => navigate("/")}>
                                Go Home
                            </button>
                            <button
                                className="py-2 px-4 rounded-3xl bg-gray-500 border text-white"
                                onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
