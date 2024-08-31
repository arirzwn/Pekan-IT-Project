import { Header } from "../layout/Header/Header.jsx";
import Tentang from "./Tentang.jsx";
import Aktifitas from "./Aktifitas.jsx";
import Video from "./Video.jsx";
import News from "./News.jsx";
import Footer from "../layout/Footer/Footer.jsx";
import banner from "/src/assets/Banner.png";
import Button from "../components/Button.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Tentang />
      <Aktifitas />
      <Video />
      <div className="mt-20">
        <figure className="relative w-full h-full flex items-center justify-center">
          <img src={banner} alt="Gambar Banner" className="w-full h-full" />
          <span className="absolute text-4xl font-light text-white">
            Hijaukan Alam Sekitar
          </span>
        </figure>
      </div>
      <News />
      <Footer />
    </>
  );
};
