import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../layout/Header/Header.jsx";
import Tentang from "./Tentang.jsx";
import Aktifitas from "./Aktifitas.jsx";
import Video from "./Video.jsx";
import News from "./News.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import banner from "/src/assets/Banner.png";
import Button from "../components/Button.jsx";

export const Home = () => {
  const location = useLocation();
  const aktifitasRef = useRef(null);

  useEffect(() => {
    if (location.pathname === "/galeri" && aktifitasRef.current) {
      aktifitasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Header />
      <Tentang />
      <div className="mt-16">
        <figure className="relative w-full h-full flex items-center justify-center">
          <img src={banner} alt="Gambar Banner" className="w-full h-full" />
          <span className="absolute text-4xl font-light text-white">
            Hijaukan Alam Sekitar
          </span>
        </figure>
      </div>

      <div id="aktifitas" ref={aktifitasRef}>
        <Aktifitas />
      </div>
      <Video />

      <News />
      {/*<Footer />*/}
    </>
  );
};
