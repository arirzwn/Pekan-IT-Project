import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
// import "./App.css";
import "./index.css";
import News from "./pages/News.jsx";
import Footer from "./layout/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <News />
      <Footer />
    </>
  );
}

export default App;
