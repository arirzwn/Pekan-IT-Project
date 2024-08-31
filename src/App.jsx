import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Tentang from "./pages/Tentang.jsx";
import Aktifitas from "./pages/Aktifitas.jsx";
import Video from "./pages/Video.jsx";
import Donasi from "./layout/CardDonasi/Donation.jsx";
import TentangKami from "./layout/TentangKami.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/aktifitas" element={<Aktifitas />} />
        <Route path="/video" element={<Video />} />
        <Route path="/news" element={<News />} />
        <Route path="/donation" element={<Donasi />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
      </Routes>
    </Router>
  );
}

export default App;
