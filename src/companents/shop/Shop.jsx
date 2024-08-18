import React, { memo } from "react";
import imgmen from "../../images/men.png";
import kuryer from "../../images/kuryer.png";

const Shop = () => {
    return (
        <section className="pt-6 mb-8">
            <div className="container max-w-7xl mx-auto px-3 xl:px-0">
                <div className="flex flex-col justify-between items-start mb-4 min-[800px]:flex-row">
                    <div className="w-full min-[800px]:w-50% min-[1240px]:w-[45%]">
                        <h1 className="text-2xl font-bold mb-12 min-[500px]:text-4xl">
                            Доставка
                        </h1>
                        <p className="text-xs font-normal mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Мы увозим товары из магазинов IKEA и привозим их в
                            Ваш дом.
                        </p>
                        <p className="text-xs font-normal mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Наше преимущество - фиксированная стоимость доставки
                            по Беларуси. Такой приятной цены вы не найдете у
                            транспортных компаний.
                        </p>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal mb-5">
                            Наше главное преимущество – работа сразу с двумя
                            магазинами IKEA. Это дает большую вероятность того,
                            что нужный вам товар будет в наличии.
                        </p>
                        <p className="text-xs font-normal mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Наша задача – доставить заказ своевременно и без
                            повреждений.
                        </p>
                        <strong className="block text-xs font-bold mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Как мы работаем?
                        </strong>
                        <p className="text-xs font-normal mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Мы закупаем выбранные вами товары в магазинах IKEA.
                            После того как они прибывают на наши склады, мы
                            начинаем доставлять их вам.
                        </p>
                        <p className="text-xs font-normal mb-5 min-[500px]:text-base min-[1160px]:text-lg">
                            Доставляем заказ до подъезда. Подъем на этаж
                            согласовывается заранее с оператором и оплачивается
                            отдельно. Для подъема крупногабаритных товаров вы
                            должны найти помощника курьеру.
                        </p>
                        <p className="text-xs font-normal min-[500px]:text-base min-[1160px]:text-lg">
                            Даты поставки указаны в календаре на главной
                            странице сайта.
                        </p>
                    </div>
                    <img
                        className="min-[800px]:w-1/2"
                        src={imgmen}
                        alt="Men img"
                    />
                </div>
                <div className="flex flex-col justify-between items-start min-[800px]:flex-row mb-4">
                    <img
                        className="min-[800px]:w-[50%] h-auto"
                        src={kuryer}
                        alt="Men img"
                    />
                    <div className="w-full min-[1160px]:w-[47%] min-[1270px]:w-[45%]">
                        <strong className="block text-xs min-[500px]:text-base min-[1160px]:text-lg font-bold mb-5">
                            Доставка по Минску и Минскому р-ну
                        </strong>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal mb-5">
                            Доставка по Минску осуществляется в течение 1-3 дней
                            после поставки товаров на наш склад. За это время с
                            вами связывается оператор и согласовывает комфортное
                            для вас время получения заказа. В согласованный день
                            курьер заранее уведомит о скором прибытии товара.
                        </p>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal mb-5">
                            Заказ будет доставлен в течение 1-5 рабочих дней
                            после поставки товаров на наш склад. Вам позвонит
                            оператор и согласует удобное для вас время. В день
                            доставки курьер за час свяжется с вами и уведомит о
                            точном времени прибытия товара.
                        </p>
                        <strong className="block text-xs min-[500px]:text-base min-[1160px]:text-lg font-bold mb-5">
                            Доставка по Беларуси
                        </strong>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal mb-5">
                            Сборка и погрузка товаров осуществляется
                            сотрудниками магазина IKEA. Поэтому точную
                            информацию о наличии выкупленных товаров мы узнаем
                            после разгрузки машины на нашем складе в Минске.
                        </p>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal">
                            Из-за отсутствия некоторых позиций итоговая сумма
                            заказа может уменьшиться. Если сумма отсутствующих
                            товаров в заказе превышает 4 000 рос. руб, то
                            комиссия за заказ будет пересчитана в соответствии с
                            тарифами, которые указаны в разделе "Оплата".
                        </p>
                    </div>
                </div>
                <div>
                    <div className="w-full min-[800px]:w-[46%]">
                        <strong className="block mb-5 text-xs min-[500px]:text-base min-[1160px]:text-lg font-bold">
                            Если некоторых позиций не оказалось в наличии
                        </strong>
                        <p className="mb-5 text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal">
                            Вы имеете право отказаться от какой-либо позиции в
                            заказе, но при этом нами удерживается комиссия за
                            доставку этого товара.
                        </p>
                        <p className="mb-5 text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal">
                            Вы можете это сделать в течение 12 часов после
                            оформления заказа
                        </p>
                        <p className="mb-5 text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal">
                            Согласовывая доставку с оператором, вы обязуетесь ее
                            принять. На каждую точку курьеру дается 10 мин. Если
                            разгрузка не начинается в течение 5 мин с момента
                            прибытия курьера к месту назначения, курьер следует
                            дальше по маршруту. Все непринятые заказы
                            отправляются на возврат в магазин IKEA. Чтобы
                            получить непринятый заказ, вам необходимо еще раз
                            его оформить на один из последующих рейсов. За нами
                            остаётся право отказать вам в дальнейшем
                            сотрудничестве..
                        </p>
                        <p className="text-xs min-[500px]:text-base min-[1160px]:text-lg font-normal">
                            В течение часа проверьте комплектацию согласно акту
                            сдачи-приемки услуг, а также каждую позицию на
                            видимые повреждения и брак.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Shop);
