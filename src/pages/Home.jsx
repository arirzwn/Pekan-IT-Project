import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../layout/Header/Header.jsx";
import Tentang from "./Tentang.jsx";
import Aktifitas from "./Aktifitas.jsx";
import Video from "./Video.jsx";
import News from "./News.jsx";
import banner from "/src/assets/Banner.png";
import TeksHijaukan from "../components/TeksHijaukan.jsx";

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
      <TeksHijaukan />

      <div id="aktifitas" ref={aktifitasRef}>
        <Aktifitas />
      </div>
      <Video />

      <News />
      {/*<Footer />*/}
    </>
  );
};
