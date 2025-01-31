import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Owl() {
    return (
        <section className="Owl py-[10px] bg-[white] w-full mt-[30px] relative">
            <div className="Container relative">
                <div className="swiper-container mx-auto w-[100%] relative overflow-visible">
                    <Swiper
                        spaceBetween={10}
                        navigation={false}
                        modules={[Navigation]}
                        breakpoints={{
                            // Extra small screens (mobile)
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            // Small screens (mobile)
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            // Medium screens (tablet)
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            // Large screens (desktop)
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 25,
                            },
                            // Extra large screens
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {[...Array(6)].map((_, index) => (
                            <SwiperSlide key={index} className="py-[30px]">
                                <div className="bg-[#076AC8] shadow-lg rounded-[10px] cursor-pointer h-[82px]">
                                    <div className="flex items-center justify-between h-full">
                                        <div className="bg-[#EFF4FA] h-full p-[20px] rounded-[10px] ml-[7px] w-[70%]">
                                            <h3 className="text-[14px] font-normal">
                                                lorem ipsum {index + 1}
                                            </h3>
                                        </div>
                                        <div className="w-[30%] flex items-center justify-center hover:text-[40px] duration-500 text-[white] text-[30px]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
                                                <g fill="currentColor">
                                                    <path d="M14 2v8a2 2 0 0 0 2 2h7.999l.001.078V23.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 23.6V4.4A2.4 2.4 0 0 1 6.4 2z"></path>
                                                    <path d="M15.5 2.475V10a.5.5 0 0 0 .5.5h7.502a3 3 0 0 0-.307-.366l-7.431-7.431a2.4 2.4 0 0 0-.264-.228"></path>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
