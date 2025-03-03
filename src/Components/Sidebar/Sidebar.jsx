import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="h-[97%] w-[300px] shadow-2xl bg-white fixed mt-[10px] ml-[10px] p-[10px] rounded-[10px]">
            <div className="w-full h-[100px] rounded-[10px] bg-[#ebebebfc] flex items-center justify-center cursor-pointer hover:bg-[#d6d6d6] duration-300">
                <h2 className="text-[20px] font-semibold">Logo</h2>
            </div>
            <div className="mt-[30px]">
                <NavLink to={'/admin/News'}>
                    <button className="group w-full shadow-md duration-500 hover:shadow-xl scale-95 hover:scale-100 flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px] hover:border-[#E6F0F9] hover:bg-[#F0F8FF]">
                        <svg className="text-[40px] text-MainColor group-hover:text-[#0077b6] duration-300" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
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
            </div>
        </div>
    );
}
