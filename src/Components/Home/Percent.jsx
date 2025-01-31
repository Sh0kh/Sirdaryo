import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Percent() {
    return (
        <section className="Percent mt-[30px]">
            <div className="Container">
                <h1 className="border-l-MainColor border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                    Sirdaryo raqamlarda
                </h1>
                <div className="swiper-container mx-auto w-[100%] relative overflow-visible">
                    <Swiper
                        spaceBetween={6}
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
                                <div className='bg-[white] cursor-pointer border-b-MainColor border-b-[5px] p-[15px] rounded-[10px] '>
                                    <div className='flex items-start justify-center'>
                                        <div className='w-[]'>
                                            <div className='text-[50px] text-[#F46700]'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4"></path><path fill="currentColor" d="M419.22 188.59L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41"></path></svg>
                                            </div>
                                        </div>
                                        <div className='w-[100%]'>
                                            <h2 className='text-[18px]'>
                                                9723.21 mlrd
                                            </h2>
                                            <p className='text-[10px]'>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, saepe.
                                            </p>
                                        </div>
                                    </div>
                                    <h3 className='mt-[15px] font-bold'>
                                        Lorem ipsum dolor sit amet.
                                    </h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}