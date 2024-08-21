import Navbar from "./layout/Navbar/Navbar.jsx";
import { Home } from "./pages/Home.jsx";
// import "./App.css";
import "./index.css";
import News from "./pages/News.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <News />
    </>
  );
}

export default App;
