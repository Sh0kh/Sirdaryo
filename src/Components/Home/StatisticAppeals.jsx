import React, { useState, useEffect } from "react";

export default function StatisticAppeals() {
    const [count, setCount] = useState(0);
    const targetValue = 1184;
    const [progress, setProgress] = useState(0); // Для анимации прогресс-бара

    useEffect(() => {
        const duration = 2000; // Время анимации в миллисекундах
        const incrementTime = 50;
        const totalSteps = duration / incrementTime;
        const incrementValue = targetValue / totalSteps;

        const interval = setInterval(() => {
            setCount((prevCount) => {
                const newValue = Math.ceil(prevCount + incrementValue);
                if (newValue >= targetValue) {
                    clearInterval(interval);
                    return targetValue;
                }
                return newValue;
            });
        }, incrementTime);

        // Запускаем анимацию прогресс-бара
        setTimeout(() => {
            setProgress(80);
        }, 100); // Задержка перед анимацией

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="StatisticAppeals bg-[white] py-[30px]">
            <div className="Container">
                <h1 className="border-l-MainColor border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                    Sirdaryo raqamlarda
                </h1>
                <div className="StatisticAppeals__wrapper flex items-center justify-between gap-[40px]">
                    <div className="w-full cursor-pointer">
                        <div className="flex items-end justify-between mt-[30px]">
                            <h2 className="text-[18px] font-bold text-[#262626]">
                                Ko‘rib chiqilmoqda
                            </h2>
                            <span className="text-[40px] h-[50px] font-bold text-[#262626]">
                                {count}
                            </span>
                        </div>
                        <div className="w-[100%] h-[1rem] bg-[#A4C6EA] mt-[20px] rounded-[5px] overflow-hidden">
                            <div
                                className="h-[100%] bg-[#0568C5] rounded-[5px]"
                                style={{
                                    width: `${progress}%`,
                                    transition: "width 2s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full cursor-pointer">
                        <div className="flex items-end justify-between mt-[30px]">
                            <h2 className="text-[18px] font-bold text-[#262626]">
                                Ko‘rib chiqilmoqda
                            </h2>
                            <span className="text-[40px] h-[50px] font-bold text-[#262626]">
                                {count}
                            </span>
                        </div>
                        <div className="w-[100%] h-[1rem] bg-[#A4C6EA] mt-[20px] rounded-[5px] overflow-hidden">
                            <div
                                className="h-[100%] bg-[#0568C5] rounded-[5px]"
                                style={{
                                    width: `${progress}%`,
                                    transition: "width 2s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full cursor-pointer">
                        <div className="flex items-end justify-between mt-[30px]">
                            <h2 className="text-[18px] font-bold text-[#262626]">
                                Ko‘rib chiqilmoqda
                            </h2>
                            <span className="text-[40px] h-[50px] font-bold text-[#262626]">
                                {count}
                            </span>
                        </div>
                        <div className="w-[100%] h-[1rem] bg-[#A4C6EA] mt-[20px] rounded-[5px] overflow-hidden">
                            <div
                                className="h-[100%] bg-[#0568C5] rounded-[5px]"
                                style={{
                                    width: `${progress}%`,
                                    transition: "width 2s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                    <div className="w-full cursor-pointer">
                        <div className="flex items-end justify-between mt-[30px]">
                            <h2 className="text-[18px] font-bold text-[#262626]">
                                Ko‘rib chiqilmoqda
                            </h2>
                            <span className="text-[40px] h-[50px] font-bold text-[#262626]">
                                {count}
                            </span>
                        </div>
                        <div className="w-[100%] h-[1rem] bg-[#A4C6EA] mt-[20px] rounded-[5px] overflow-hidden">
                            <div
                                className="h-[100%] bg-[#0568C5] rounded-[5px]"
                                style={{
                                    width: `${progress}%`,
                                    transition: "width 2s ease-in-out",
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
