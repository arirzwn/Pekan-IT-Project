import { useEffect, useRef } from "react";
import Perubahan from "./Perubahan.jsx";
import CardDonasi from "./CardDonasi.jsx";
import Scrollbar from "smooth-scrollbar";
import Footer from "../Footer/Footer.jsx";
import Hero from "./Hero.jsx";
import TeksDonasi from "./TeksDonasi.jsx";

export default function Donation() {
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

  return (
    <>
      {/*// desktop*/}
      <div
        id="scroll-container"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div>
          <Hero />
          <Perubahan />
          {/* Desktop */}
          <div className="hidden xl:flex mx-[70px] gap-10 items-center justify-center h-screen">
            <div className="w-1/2">
              <CardDonasi />
            </div>
            <TeksDonasi />
          </div>

          {/* Mobile */}
          <div className="xl:hidden mx-10 gap-10 items-center justify-center">
            <TeksDonasi />
            <CardDonasi />
          </div>
        </div>
        <Footer />
      </div>

      {/*  Mobile*/}
    </>
  );
}
