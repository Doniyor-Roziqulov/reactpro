import React, { memo } from "react";
import logowhite from "../../images/logowhite.svg";
import logo from "../../images/logo.svg";
import instagram from "../../images/instagram.svg";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const { pathname } = useLocation();
    if (
        pathname === "/account" ||
        pathname === "/admin/createproduct" ||
        pathname === "/admin/manageproduct"
    ) {
        return <></>;
    }
    return (
        <footer className="pt-12 pb-14 bg-slate-50 dark:bg-zinc-800 dark:text-white">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <a href="/">
                    <img className="logo__img" src={logo} alt="logo" />
                    <img
                        className="logo__imgwhite"
                        src={logowhite}
                        alt="logo"
                    />
                </a>
                <div className="flex flex-wrap justify-between mt-7 gap-3">
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Информация
                        </strong>
                        <p className="text-black text-sm mb-5 dark:text-white">
                            Все права защищены © 2015 <br /> интернет-магазин
                            AIKEA.BY <br /> Беларусь.
                        </p>
                        <p className="text-black text-sm mb-5 dark:text-white">
                            УНП 191828159 ИП Парейко В.С., <br />{" "}
                            регистрационный номер в <br /> торговом реестре
                            158299
                        </p>
                        <p className="text-black text-sm border-b inline-block border-black dark:text-white">
                            Политика конфиденциальности
                        </p>
                    </div>
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Меню
                        </strong>
                        <p className="text-slate-400 mb-5">
                            <NavLink
                                className="text-black text-sm dark:text-white"
                                to={"/"}>
                                Главная{" "}
                            </NavLink>{" "}
                            |{" "}
                            <NavLink
                                className="text-black text-sm dark:text-white"
                                to={"/catalog"}>
                                Каталог{" "}
                            </NavLink>
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Товары в наличии
                            </a>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Скидки{" "}
                            </a>{" "}
                            |
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Популярное{" "}
                            </a>{" "}
                            |
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Вдохновение{" "}
                            </a>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <NavLink
                                className="text-black text-sm dark:text-white"
                                to={"/delivery"}>
                                Доставка
                            </NavLink>{" "}
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Услуги{" "}
                            </a>{" "}
                            |{" "}
                            <NavLink
                                className="text-black text-sm dark:text-white"
                                to={"*"}>
                                Условия
                            </NavLink>
                        </p>
                        <p className="text-slate-400 mb-5">
                            <NavLink
                                className="text-black text-sm dark:text-white"
                                to={"/contact"}>
                                Контакты
                            </NavLink>{" "}
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Вставить{" "}
                            </a>{" "}
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Cписок покупок
                            </a>
                        </p>
                        <p className="text-slate-400">
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Корзина
                            </a>{" "}
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Личный кабинет{" "}
                            </a>{" "}
                            |{" "}
                            <a
                                className="text-black text-sm dark:text-white"
                                href="#">
                                Избранное
                            </a>
                        </p>
                    </div>
                    <div>
                        <strong className="text-lg font-bold mb-5 block">
                            Контакты
                        </strong>
                        <p className="block mb-5 text-sm">г.Минск</p>
                        <a
                            className="block mb-5 text-sm"
                            href="https://maps.app.goo.gl/Npz4xDMTLfuTtDAK6"
                            target="_blank">
                            Ул. Первомайская, Д. 1, Кв. 43
                        </a>
                        <a
                            className="block mb-5 text-sm"
                            href="tel:+3754348472884">
                            + 375 434 847 28 84
                        </a>
                        <a
                            className="block mb-5 text-sm"
                            href="tel:+3754484730948">
                            + 375 448 473 09 48
                        </a>
                        <a
                            className="block text-sm"
                            href="mailto:ikeaekspress@gmail.com">
                            ikeaekspress@gmail.com
                        </a>
                    </div>
                    <div className="flex items-end">
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);
