import React from "react";
import icon1 from "../../images/icon1.svg";
import icon2 from "../../images/icon2.svg";
import icon3 from "../../images/icon3.svg";
import men3 from "../../images/men3.png";

const Address = () => {
    return (
        <section className="pt-6">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex flex-col min-[1000px]:flex-row">
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold mb-6">
                            Контакты
                        </h1>
                        <div className="flex flex-col gap-y-2 min-[650px]:flex-row gap-x-10 mb-14">
                            <ul className="flex flex-col">
                                <li>
                                    <a
                                        className="text-sm lg:text-lg"
                                        href="tel:+3754348472884">
                                        + 375 434 847 28 84
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm lg:text-lg"
                                        href="tel:+3754484730948">
                                        + 375 448 473 09 48
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="text-sm lg:text-lg underline"
                                        href="mailto:ikeaekspress@gmail.com">
                                        ikeaekspress@gmail.com
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        className="text-sm lg:text-lg"
                                        href="https://maps.app.goo.gl/MqULJ8Tn86Ur5Xee6s">
                                        г.Минск <br /> Ул. Первомайская <br />
                                        Д. 1, Кв. 43
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="text-sm lg:text-lg">
                                    ОГРН: 3748 49384 4847 30948
                                </li>
                                <li className="text-sm lg:text-lg">
                                    ООО “Икеа”
                                </li>
                                <a
                                    href="#"
                                    className="text-sm lg:text-lg underline">
                                    Политика конфиденциальности
                                </a>
                            </ul>
                        </div>
                        <ul className="flex gap-x-14">
                            <li>
                                <a href="#">
                                    <img src={icon1} alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={icon2} alt="icon" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={icon3} alt="icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img
                        className="min-[1000px]:w-[45%]"
                        src={men3}
                        alt="men"
                    />
                </div>
            </div>
        </section>
    );
};

export default Address;
