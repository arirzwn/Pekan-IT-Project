import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
// import "./App.css";
import "./index.css";
import News from "./pages/News.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import Tentang from "./pages/Tentang.jsx";
import Aktifitas from "./pages/Aktifitas.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Tentang />
      <Aktifitas />
      <News />

      <Footer />
    </>
  );
}

export default App;
