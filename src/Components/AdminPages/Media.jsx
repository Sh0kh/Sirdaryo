import { useEffect, useState } from "react";
import NewsCreate from "../AdminComponents/News/NewsCreate";
import axios from "axios";
import ReactLoading from 'react-loading';
import NewsEdit from "../AdminComponents/News/NewsEdit";
import NewsDelete from "../AdminComponents/News/NewsDelete";
import CreateMedia from "../AdminComponents/Media/CreateMedia";

export default function Media() {
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false)
    const [Id, setId] = useState([])
    const [data, setData] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false)
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get('/article/findAll', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setData(response?.data?.object?.content);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <ReactLoading type="spinningBubbles" color='#1466B3' height={100} width={100} />
            </div>
        );
    }

    return (
        <>
            <div className="pt-[75px] pb-[50px]">
                <div className="Admin__header__wrapper flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Ijtimoiy tarmoq
                    </h1>
                    <button
                        onClick={() => setCreateModal(true)}
                        className="bg-MainColor text-white px-4 py-2 rounded-lg shadow-lg border-2 border-MainColor duration-500 hover:text-MainColor hover:bg-transparent">
                        Yaratish
                    </button>
                </div>
                <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="text-left text-sm md:text-base">
                                <th className="p-3">№</th>
                                <th className="p-3">Foto</th>
                                <th className="p-3">Title</th>
                                <th className="p-3">Url</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((news, index) => (
                                <tr key={news.id} className="border-t hover:bg-gray-100 text-sm md:text-base">
                                    <td className="p-3">{ index + 1}</td>
                                    <td className="p-3">
                                        <img src={news.url} alt={news.url} className="w-[80px] h-[80px] object-cover rounded-md" />
                                    </td>
                                    <td className="p-3">{news.title}</td>
                                    <td className="p-3 truncate max-w-[150px]">{news.description}</td>
                                    <td className="p-3">
                                        <a href={news.url} className="text-MainColor hover:underline">Link</a>
                                    </td>
                                    <td className="p-3">{news.mediaType}</td>
                                    <td className="p-3">
                                        <div className="flex items-center gap-[5px]">
                                            <button
                                                onClick={() => { setId(news?.id); setDeleteModal(true) }}

                                                className="bg-red-500 text-white px-2 py-2 rounded-md text-xs hover:bg-red-700">
                                                <svg className="text-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path></svg>
                                            </button>
                                            <button
                                                onClick={() => { setId(news?.id); setEditModal(true) }}
                                                className="bg-yellow-500 text-white px-2 py-2 rounded-md text-xs hover:bg-yellow-700">
                                                <svg className="text-[20px]" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1q-.15.15-.15.36M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75z"></path></svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <NewsDelete refresh={() => fetchData(currentPage)} isOpen={deleteModal} onClose={() => setDeleteModal(false)} data={Id} />
            <CreateMedia fresh={() => fetchData()} isOpen={createModal} onClose={() => setCreateModal(false)} />
            <NewsEdit refresh={() => fetchData(currentPage)} isOpen={editModal} onClose={() => setEditModal(false)} data={Id} />

        </>
    );
}