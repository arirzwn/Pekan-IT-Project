import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
// import "./App.css";
import "./index.css";
import News from "./pages/News.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Tentang from "./pages/Tentang.jsx";
import Aktifitas from "./pages/Aktifitas.jsx";
import Video from "./pages/Video.jsx";
import banner from "/src/assets/Banner.png";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Tentang />
      <div className="mt-20">
        <figure className="relative w-full h-full flex items-center justify-center">
          <img src={banner} alt="Gambar Banner" className="w-full h-full" />
          <span className="absolute  text-4xl font-light text-white">
            Hijaukan Alam Sekitar
          </span>
        </figure>
      </div>
      <Aktifitas />
      <Video />
      <News />
      <Footer />
    </>
  );
}

export default App;
