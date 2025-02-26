import { NavLink } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



export default function Hero() {

    useGSAP(() => {
        gsap.fromTo('.News__hero__card',
            {
                opacity: 0,
                y: 100,
                zIndex: 1,
            },
            {
                opacity: 1,
                y: 0,
                zIndex: 1,
                duration: 1.3,
                ease: "power1.inOut"
            }
        )
        gsap.fromTo('.News__Hero__title',
            {
                opacity: 0,
                x: -100,
                zIndex: 1,
            },
            {
                opacity: 1,
                x: 0,
                zIndex: 1,
                duration: 1.3,
                ease: "power1.inOut"
            }
        )
    });

    return (
        <section className="News__Hero py-[30px]">
            <div className="Container">
                <h1 className="News__Hero__title border-l-MainColor mb-[30px] border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                    Yangiliklar
                </h1>
                <div className="flex items-center flex-col">
                    <NavLink to={'/news/1'}>
                        <div className="News__hero__card cursor-pointer bg-[white] rounded-[10px] p-[20px] w-[100%] shadow-xl flex items-start gap-[30px]">
                            <img className="block mx-auto rounded-[10px] w-[300px] h-[200px] object-cover" src="https://img.freepik.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-68032.jpg" alt="Foto" />
                            <div className="">
                                <h2 className="text-MainColor text-[25px] font-bold">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea officia dicta aliquam
                                </h2>
                                <div className="w-[70%] my-[10px] h-[3px] bg-MainColor">
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa aspernatur voluptatem maiores cumque, vitae nihil eveniet explicabo est ipsam nemo, consequuntur, doloremque similique quibusdam mollitia totam. Minima saepe quia nulla?
                                </p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </section>
    )
}