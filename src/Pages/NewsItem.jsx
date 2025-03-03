import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function NewsItems() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Current ID:", id); // id ni konsolda ko‘rish uchun

    const fetchNewsById = async () => {
      if (!id) {
        console.error("ID topilmadi!");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`/article/findById/${id}`);
        console.log("API Response:", response.data);
        setNews(response.data.object || null);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsById();
  }, [id]);

  useGSAP(() => {
    gsap.fromTo(
      ".News__hero__card",
      { opacity: 0, y: 100, zIndex: 1 },
      { opacity: 1, y: 0, zIndex: 1, duration: 1.3, ease: "power1.inOut" }
    );
    gsap.fromTo(
      ".News__Hero__title",
      { opacity: 0, x: -100, zIndex: 1 },
      { opacity: 1, x: 0, zIndex: 1, duration: 1.3, ease: "power1.inOut" }
    );
  }, []);

  if (loading) {
    return <p className="text-center text-lg py-10">Yuklanmoqda...</p>;
  }

  if (!news) {
    return <p className="text-center text-lg py-10 text-red-500">Yangilik topilmadi!</p>;
  }

  return (
    <main>
      <section className="NewsItem py-[30px]">
        <div className="Container">
          <h1 className="News__Hero__title border-l-MainColor mb-[30px] border-l-[3px] pl-[10px] text-[28px] font-bold text-[#1F1F1F]">
            {news?.title}
          </h1>
          <div className="News__hero__card cursor-pointer bg-[white] rounded-[10px] p-[20px] w-[100%] shadow-xl">
            <img
              className="block mx-auto rounded-[10px] w-[600px] h-[400px] object-cover"
              src={news?.contentUrl || "https://via.placeholder.com/600x400"}
              alt="Foto"
            />
            <div className="w-[70%] mx-auto my-[30px] h-[3px] bg-MainColor"></div>
            <p>{news?.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
