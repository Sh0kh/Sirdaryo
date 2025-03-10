import { NavLink } from "react-router-dom";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useState } from "react";
export default function Sidebar() {

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="h-[97%] w-[300px] shadow-2xl bg-white fixed mt-[10px] ml-[10px] p-[10px] rounded-[10px]">
            <div className="w-full h-[100px] rounded-[10px] bg-[#ebebebfc] flex items-center justify-center cursor-pointer hover:bg-[#d6d6d6] duration-300">
                <h2 className="text-[20px] font-semibold">Logo</h2>
            </div>
            <div className="mt-[30px]">
                <NavLink to={'/admin/dashboard'}>
                    <button className="group w-full shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg

                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1"></path></svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Bosh sahifa
                        </span>
                    </button>
                </NavLink>
                <NavLink to={'/admin/menu'}>
                    <button className="group w-full shadow-md mt-[10px] duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                                <path d="M18 15V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h12M6 8h8m-8 4h8m-8 4h4"></path>
                                <path d="M18 8h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v8a2 2 0 1 1-4 0z"></path>
                            </g>
                        </svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Menyu
                        </span>
                    </button>
                </NavLink>
                <NavLink to={'/admin/News'}>
                    <button className="group w-full shadow-md mt-[10px] duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor">
                                <path d="M18 15V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h12M6 8h8m-8 4h8m-8 4h4"></path>
                                <path d="M18 8h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v8a2 2 0 1 1-4 0z"></path>
                            </g>
                        </svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Yangiliklar
                        </span>
                    </button>
                </NavLink>
                <NavLink to={'/admin/media'}>
                    <button className="group w-full mt-[10px] shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M13 2.5H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm9 9.857L9.5 8l-2.476 2.83L5.5 9L4 10.8V12h8zM6.5 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" clipRule="evenodd"></path></svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Ijtimoiy tarmoq
                        </span>
                    </button>
                </NavLink>
                <NavLink to={'/admin/party'}>
                    <button className="group w-full mt-[10px] shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M10.47 22c-3.992 0-5.989 0-7.23-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.24-6.828C4.481 2 6.478 2 10.47 2h1.06c3.993 0 5.989 0 7.23 1.172C20 4.343 20 6.229 20 10M7 7h8m-8 5h6"></path><path d="M14 22c1.838-2.748 6.119-2.898 8 0m-2-7.071c0 1.065-.895 1.928-2 1.928s-2-.863-2-1.928S16.895 13 18 13s2 .864 2 1.929"></path></g></svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Partiya
                        </span>
                    </button>
                </NavLink>
                <Accordion open={open === 1} className="duration-500">
                    <AccordionHeader
                        className="group w-full mt-[10px] shadow-md duration-500 transition-all hover:shadow-xl scale-95 hover:scale-100 flex items-center justify-start gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]"
                        onClick={() => handleOpen(1)}>
                        <svg
                            className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 0h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M10 13H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1m7 0a4 4 0 1 1-3.995 4.2L13 17l.005-.2A4 4 0 0 1 17 13"></path></svg>
                        <span className="text-[#70757b] group-hover:text-[#0077b6] duration-300">
                            Hokimiyat haqida
                        </span>
                    </AccordionHeader>
                    <AccordionBody className={'pl-[15px]'}>
                        <NavLink
                            className="group w-full  shadow-md duration-500 transition-all hover:shadow-xl scale-95 hover:scale-100 flex items-center justify-start gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9]  hover:border-[#E6F0F9] hover:bg-[#F0F8FF]"
                            to={'/admin/person'}>
                            <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">
                                Rahbariyat
                            </button>
                        </NavLink>
                        <NavLink
                            className="group w-full mt-[5px] shadow-md duration-500 transition-all hover:shadow-xl scale-95 hover:scale-100 flex items-center justify-start gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9]  hover:border-[#E6F0F9] hover:bg-[#F0F8FF]"
                            to={'/admin/rekvizits'}>
                            <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">Rekvizitlar</button>
                        </NavLink>
                        <NavLink
                            className="group w-full mt-[5px] shadow-md duration-500 transition-all hover:shadow-xl scale-95 hover:scale-100 flex items-center justify-start gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]"
                            to={'/admin/userRec'}>
                            <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">
                                Fuqarolarni qabul qilish tartibi
                            </button>
                        </NavLink>
                        <NavLink
                            className="group w-full mt-[10px] shadow-md duration-500 transition-all hover:shadow-xl scale-95 hover:scale-100 flex items-center justify-start gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9]  hover:border-[#E6F0F9] hover:bg-[#F0F8FF]"
                            to={'/admin/orgStructure'}>
                            <button className="block w-full text-left p-2 hover:bg-gray-100 rounded">
                                Tashkiliy tuzilmasi
                            </button>
                        </NavLink>

                    </AccordionBody>
                </Accordion>
            </div>
        </div>
    );
}
