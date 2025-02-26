export default function Sidebar() {
    return (
        <div className="h-[97%] w-[300px] shadow-2xl bg-[white] fixed mt-[10px] ml-[10px] p-[10px] rounded-[10px]">
            <div className="w-[100%] h-[100px] rounded-[10px] bg-[#ebebebfc] flex items-center justify-center cursor-pointer">
                <h2>
                    Logo
                </h2>
            </div>
            <div className="mt-[30px]">
                <button className="w-full flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px]">
                    <svg className="text-[40px] text-MainColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M18 15V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h12M6 8h8m-8 4h8m-8 4h4"></path><path d="M18 8h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v8a2 2 0 1 1-4 0z"></path></g></svg>
                    <span className="text-[#70757b]">
                        News
                    </span>
                </button>
                <button className="w-full mt-[10px] flex items-center gap-[10px] border-[2px] rounded-[10px] border-[#E5EFF9] p-[5px]">
                    <svg className="text-[40px] text-MainColor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="currentColor"><path d="M18 15V9c0-2.828 0-4.243-.879-5.121C16.243 3 14.828 3 12 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v6c0 2.828 0 4.243.879 5.121C3.757 21 5.172 21 8 21h12M6 8h8m-8 4h8m-8 4h4"></path><path d="M18 8h1c1.414 0 2.121 0 2.56.44c.44.439.44 1.146.44 2.56v8a2 2 0 1 1-4 0z"></path></g></svg>
                    <span className="text-[#70757b]">
                        News
                    </span>
                </button>
            </div>
        </div>
    )
}