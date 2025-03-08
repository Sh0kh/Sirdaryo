import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const slides = [
    { src: "https://sirdaryo.uz/uploads/2021/04/gr3.jpg", alt: "Инфографика 3", type: "video" },
    { src: "https://sirdaryo.uz/uploads/2021/04/gr4.jpg", alt: "Инфографика 4", type: "img" },
    { src: "https://sirdaryo.uz/uploads/2021/04/banner1-medium.jpg", alt: "Инфографика 5", type: "video" },
    { src: "https://sirdaryo.uz/uploads/2021/04/gr1.jpg", alt: "Инфографика 1", type: "img" },
    { src: "https://sirdaryo.uz/uploads/2021/04/gr2.jpg", alt: "Инфографика 2", type: "video" },
    { src: "https://sirdaryo.uz/uploads/2021/04/2021-04-2717-37-58.jpg", alt: "Сирдаре вилояти", type: "img" },
    { src: "https://sirdaryo.uz/uploads/2021/04/photo2021-04-1515-39-22-2.jpg", alt: "Фото", type: "video" },
];

export default function AnimateSwiper() {
    return (
        <section className="AnimateSwiper bg-white py-6">
            <div className="container mx-auto px-4">
                <h1 className="border-l-4 border-mainColor pl-3 text-2xl font-bold text-gray-900 mb-4">
                    Mediateka
                </h1>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={3}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Autoplay]}
                    className="pb-6"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className="animate_swiper_card rounded-lg h-[200px] shadow-md overflow-hidden relative">
                            <img src={slide.src} alt={slide.alt} className="w-full h-[350px] object-cover rounded-md" />
                            <div className="absolute inset-0 bg-blue-500 bg-opacity-40 flex items-center justify-center">
                                {slide.type === "img" ? (
                              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><g fill="none"><path fill="#fff" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22
                              //  14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887q-.174.129-.328.285" clip-rule="evenodd"/><path stroke="#fff" stroke-width="2" d="M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z"/><circle cx="15" cy="9" r="2" fill="#fff"/></g></svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#fff" d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zm7.622 4.422a.4.4 0 0 0-.622.332v6.506a.4.4 0 0 0 .622.332l4.879-3.252a.4.4 0 0 0 0-.666z"/></svg>
                                )}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
