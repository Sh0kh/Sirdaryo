import { NavLink } from "react-router-dom";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


export default function NewsItems() {


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
        <main>
            <section className="NewsItem py-[30px]">
                <div className="Container">
                    <h1 className="News__Hero__title border-l-MainColor mb-[30px] border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                        Yangiliklar Title
                    </h1>
                    <div className="News__hero__card cursor-pointer bg-[white] rounded-[10px] p-[20px] w-[100%] shadow-xl">
                        <img className="block mx-auto rounded-[10px] w-[600px] h-[400px] object-cover" src="https://img.freepik.com/free-photo/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio_1258-68032.jpg" alt="Foto" />
                        <div className="w-[70%] mx-auto my-[30px] h-[3px] bg-MainColor">

                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nesciunt eveniet saepe cumque voluptatum nobis ratione fugit quas dolorum! Voluptatibus sequi possimus doloremque quam vel corrupti libero quis doloribus. Vitae cum beatae earum eius doloribus a suscipit modi aliquam provident sed culpa ducimus esse animi deserunt est omnis incidunt, quaerat architecto illo? Reiciendis nam facilis beatae quasi aut nihil neque aperiam. Rerum rem a natus minus doloribus assumenda perferendis necessitatibus, quis nobis aliquam vitae nostrum ex? Sapiente rem praesentium labore natus accusamus laboriosam aperiam, blanditiis totam, magnam perspiciatis qui! Ab vero aperiam itaque ipsum hic pariatur fugiat odit ad autem?
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}