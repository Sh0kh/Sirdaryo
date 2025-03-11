import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap-trial/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Koruption() {

    useGSAP(() => {
        gsap.fromTo('.Koruption',
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
    });

    return (
        <div className="Koruption mt-[30px] pb-[30px]">
            <div className="Container">
                <h1 className="News__Hero__title border-l-MainColor mb-[30px] border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                    Korrupsiyaga qarshi kurashish
                </h1>
                <div className="cursor-pointer bg-[white] mb-[10px] rounded-[10px] p-[20px] w-[100%] shadow-xl">
                    <div className="flex items-center justify-between border-[2px] border-[black] shadow-xl px-[20px] py-[10px] rounded-[10px] mt-[20px] hover:border-MainColor duration-500 hover:shadow-2xl
                    ">
                        <span>
                            Viloyat hokimligi xodimlarining odob-axloq qoidalari
                        </span>
                        <a className="text-[30px] hover:text-MainColor duration-300" href="http://" download target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"></path></svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between border-[2px] border-[black] shadow-xl px-[20px] py-[10px] rounded-[10px] mt-[20px] hover:border-MainColor duration-500 hover:shadow-2xl
                    ">
                        <span>
                            Viloyat hokimligi boshqaruvi tuzilmasida Korrupsiyaga qarshi ichki nazorat sho‘basini tashkil etishga oid
                        </span>
                        <a className="text-[30px] hover:text-MainColor duration-300" href="http://" download target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"></path></svg>
                        </a>
                    </div>
                    <div className="flex items-center justify-between border-[2px] border-[black] shadow-xl px-[20px] py-[10px] rounded-[10px] mt-[20px] hover:border-MainColor duration-500 hover:shadow-2xl
                    ">
                        <span>
                            Viloyatda korrupsiyaga qarshi kurashish tizimi samaradorligini yana-da takomillashtirishga oid
                        </span>
                        <a className="text-[30px] hover:text-MainColor duration-300" href="http://" download target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.575q-.2 0-.375-.062T11.3 15.3l-3.6-3.6q-.3-.3-.288-.7t.288-.7q.3-.3.713-.312t.712.287L11 12.15V5q0-.425.288-.712T12 4t.713.288T13 5v7.15l1.875-1.875q.3-.3.713-.288t.712.313q.275.3.288.7t-.288.7l-3.6 3.6q-.15.15-.325.213t-.375.062M6 20q-.825 0-1.412-.587T4 18v-2q0-.425.288-.712T5 15t.713.288T6 16v2h12v-2q0-.425.288-.712T19 15t.713.288T20 16v2q0 .825-.587 1.413T18 20z"></path></svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}