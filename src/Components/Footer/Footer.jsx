import logo from '../../img/logo.png'
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import Map from '../../img/map.png'


export default function Footer() {
    const [open, setOpen] = useState(0); // State to control the accordion


    // Toggle accordion visibility
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };



    const { t, i18n } = useTranslation();

    const renderAccordionItems = () => {
        const sections = [
            { title: 'Hokimiyat haqida', links: ['/link1', '/link2', '/link3'] },
            { title: 'Faoliyat', links: ['/link4', '/link5', '/link6'] },
            { title: 'Quyi tashkilotlar', links: ['/link7', '/link8', '/link9'] },
            { title: 'Mahalliy Kengash', links: ['/link10', '/link11', '/link12'] },
            { title: 'Matbuot xizmati', links: ['/link13', '/link14', '/link15'] },
            { title: 'Korrupsiyaga qarshi kurashish', links: ['/link16', '/link17', '/link18'] },
            { title: 'Tuman va shaharlar', links: ['/link19', '/link20', '/link21'] },
            { title: 'Ochiq ma`lumotlar', links: ['/link22', '/link23', '/link24'] },
        ];

        return sections.map((section, index) => (
            <Accordion key={index} open={open === index + 1} className="rounded-[8px] w-full border-none">
                <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-white w-full border-none py-[8px]">
                    <div className='flex items-center gap-[5px] w-full'>
                        <h2 className="text-white font-normal text-[18px]">
                            {t(section.title)}
                        </h2>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="m192 384l320 384l320-384z"></path></svg>
                    </div>
                </AccordionHeader>
                <AccordionBody className="bg-[#076AC8] py-[2px] border-none text-white rounded-b-[8px]">
                    <ul className="p-[5px] border-none">
                        {section.links.map((link, idx) => (
                            <li key={idx} className="mb-[10px] border-none">
                                <NavLink to={link}>
                                    {t(`Link ${idx + 1}`)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </AccordionBody>
            </Accordion>

        ));
    };

    return (
        <footer className="text-[white] pt-[50px] pb-[20px] mt-[30px]">
            <div className="Container">
                <div className="Footer__wrapper flex items-start justify-between gap-[50px]">
                    <div className="bg-[#076AC8] w-[100%] p-[30px]">
                        <div className='logo flex items-center gap-[10px] '>
                            <img src={logo} alt="Logo" />
                            <h1 class="w-[200px] font-bold text-[18px] tracking-[0.27px] uppercase text-[rgba(247,247,247,1)] ml-[15px]">
                                {t('Logo')}
                            </h1>
                        </div>
                        <h2 className='text-[18px] font-bold mt-[30px]'>
                            MANZIL
                        </h2>
                        <div className='flex items-center gap-[5px] mt-[30px]'>
                            <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></path></svg>
                            <span>
                                Qabulxona telefoni:
                            </span>
                            <a href="tel:+998672254090">(67) 225-40-90</a>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[30px]'>
                            <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m21 15.46l-5.27-.61l-2.52 2.52a15.05 15.05 0 0 1-6.59-6.59l2.53-2.53L8.54 3H3.03C2.45 13.18 10.82 21.55 21 20.97z"></path></svg>
                            <span>
                                Qabulxona telefoni:
                            </span>
                            <a href="tel:+998672252982">(67) 225-29-82</a>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[30px]'>
                            <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1"></path></g></svg>
                            <span>
                                Ish vaqti: Dushanba - Juma, 9:00 - 18:00,
                                Tushlik 13:00-14:00
                            </span>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[30px]'>
                            <svg className='text-[30px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"></path></svg>
                            <span>
                                120100, Guliston shahar, Islom Karimov ko'chasi 60 uy.
                            </span>
                        </div>
                        <div className='flex items-center gap-[5px] mt-[30px]'>
                            <svg className='text-[80px]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18 11H6V6h12m-1.5 11a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-9 0A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17M4 16c0 .88.39 1.67 1 2.22V20a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4z"></path></svg>
                            <span className='italic'>
                                (2, 2, 12-автобуслар, "Темир йўл бекати - Университет" йўналишидаги йўналишли таксиларнинг "Юрт байроғи майдони" бекати)
                            </span>
                        </div>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className='text-[18px] uppercase font-bold mt-[20px]'>
                            Sayt xaritasi
                        </h2>
                        <div className="w-[70%] mt-[10px]">
                            {renderAccordionItems()}
                        </div>
                    </div>
                    <div className='w-[100%]'>
                        <h2 className="text-[18px] uppercase font-bold mt-[20px]">Xarita</h2>
                        <NavLink to={'/'} className={'mt-[20px] block'}>
                            <div className="FooterFotoMap relative w-full h-[200px] overflow-hidden">
                                <img
                                    src={Map}
                                    alt="Foto"
                                    className="FooterFotoMap w-full h-[180px] object-cover transition-transform duration-300 transform hover:scale-110"
                                />
                            </div>
                        </NavLink>
                        <div className='w-[100%] mt-[10px]'>
                            <label htmlFor="Search" className='flex items-center justify-between bg-[white] p-[10px]'>
                                <input type="text" placeholder='Izlash' className='w-[100%] outline-none text-[black]'/>
                                <svg className='text-[black] opacity-[0.7]' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path></svg>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}