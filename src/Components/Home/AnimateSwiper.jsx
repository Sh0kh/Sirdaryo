import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../style/AnimateSwiper.css'
import 'swiper/css';
import 'swiper/css/effect-cards';


import { EffectCards } from 'swiper/modules';


export default function AnimateSwiper() {


    return (
        <section className="AnimateSwiper bg-[white] py-[30px]">
            <div className="Container">
                <h1 className="border-l-MainColor border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                    Mediateka
                </h1>
                <div>
                    <Swiper
                        effect="cards" // Эффект "cards"
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                        spaceBetween={30}
                        cardEffect={{
                            rotate: 10, // Уменьшаем угол поворота, чтобы слайды не были слишком наклонными
                            scale: 0.9, // Меншаем масштабирование слайда
                        }}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>


                </div>
            </div>
        </section>
    )
}