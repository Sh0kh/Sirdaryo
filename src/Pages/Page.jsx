import axios from "axios"
import ReactLoading from 'react-loading';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Page() {
    const { ID } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`/data/getAllMenuId/${ID}`)
            setData(response?.data?.object || [])
        } catch (error) {
            console?.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [ID])


    if (loading) {
        return (
            <div className='flex items-center justify-center h-screen w-full'>
                <ReactLoading type="spinningBubbles" color='#1466B3' height={100} width={100} />
            </div>
        );
    }

    return (
        <section className="Rek mt-[30px] pb-[30px]">
            <div className="Container">
                {data?.length > 0 ? (
                    data?.map((i, index) => (
                        <div>
                            <h1 className="News__Hero__title border-l-MainColor mb-[30px] border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
                                {i?.title}
                            </h1>
                            <div key={index} className="cursor-pointer bg-[white] mb-[10px] rounded-[10px] p-[20px] w-[100%] shadow-xl">
                                <div
                                    className="mt-2"
                                    dangerouslySetInnerHTML={{ __html: i?.context }}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="w-full h-[400px] flex items-center justify-center">
                        <h1>
                            Ma'lumot y'oq
                        </h1>
                    </div>
                )}
            </div>
        </section>
    )
}