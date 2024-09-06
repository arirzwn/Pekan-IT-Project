import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Scrollbar from "smooth-scrollbar";
import { Header } from "../layout/Header/Header.jsx";
import Tentang from "./Tentang.jsx";
import Aktifitas from "./Aktifitas.jsx";
import Video from "./Video.jsx";
import News from "./News.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import TeksHijaukan from "../components/TeksHijaukan.jsx";

export const Home = () => {
  const location = useLocation();
  const aktifitasRef = useRef(null);
  const scrollbarRef = useRef(null);

  useEffect(() => {
    const options = {
      damping: 0.1,
    };
    scrollbarRef.current = Scrollbar.init(
      document.getElementById("scroll-container"),
      options,
    );

    return () => {
      if (scrollbarRef.current) {
        scrollbarRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/galeri" && aktifitasRef.current) {
      scrollbarRef.current.scrollIntoView(aktifitasRef.current, {
        offsetTop: -70,
        alignToTop: true,
      });
    }
  }, [location]);

  return (
    <div
      id="scroll-container"
      className="no-scrollbar"
      style={{ height: "100vh", overflow: "hidden" }}
    >
      <Header />
      <Tentang />
      <TeksHijaukan />
      <div id="aktifitas" ref={aktifitasRef}>
        <Aktifitas />
      </div>
      <Video />
      <News />
      <Footer />
    </div>
  );
};
