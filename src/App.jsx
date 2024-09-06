// src/App.jsx
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
import News from "./pages/News.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Tentang from "./pages/Tentang.jsx";
import Aktifitas from "./pages/Aktifitas.jsx";
import Video from "./pages/Video.jsx";
import Donasi from "./layout/CardDonasi/Donation.jsx";
import TentangKami from "./layout/TentangKami.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/aktifitas" element={<Aktifitas />} />
            <Route path="/video" element={<Video />} />
            <Route path="/news" element={<News />} />
            <Route path="/donation" element={<Donasi />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/galeri" element={<Home />} />
            <Route path="/kontak" element={<Contact />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/*<Footer />*/}
    </>
  );
}

export default App;
