import { useEffect, useRef } from "react";
import Judul from "../components/Judul.jsx";
import CardAnggota from "../components/CardAnggota.jsx";
import Button from "../components/Button.jsx";
import Scrollbar from "smooth-scrollbar";
import Footer from "../layout/Footer/Footer.jsx";
import "/src/index.css";
import { motion } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.5 },
  }),
};

function Timeline() {
  return (
    <>
      <div className="mx-auto w-[80%] ">
        <div className="mx-auto w-[80%] ">
          {/* Desktop */}
          <ul className="hidden xl:block timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Pertemuan Perdana
                </div>
                <p className="text-sm sm:text-base">
                  Pertemuan pertama kali antar sesama anggota tim arisan.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Kolaborasi Pertama
                </div>
                <p className="text-sm sm:text-base">
                  Bergerak bersama dalam satu kelompok project dalam tugas
                  perkuliahan.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Kompetisi Perdana
                </div>
                <p className="text-sm sm:text-base">
                  Mengikuti perlombaan idea project dan meraih penghargaan.
                </p>
              </div>
            </li>
          </ul>

          {/* Mobile */}
          <ul className="block xl:hidden timeline timeline-snap-icon max-md:timeline-compact timeline-vertical relative">
            <li className="pertama flex items-center relative">
              <div className="timeline-middle flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end text-right ml-2 max-w-[calc(50%-1rem)]">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Pertemuan Perdana
                </div>
                <p className="text-sm sm:text-base">
                  Pertemuan pertama kali antar sesama anggota tim arisan
                </p>
              </div>
            </li>
            <li className="kedua flex items-center relative">
              <div className="timeline-middle flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 text-left ml-[calc(50%+1rem)] max-w-[calc(50%-1rem)]">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Kolaborasi Pertama
                </div>
                <p className="text-sm sm:text-base">
                  Bergerak bersama dalam satu kelompok project dalam tugas
                  perkuliahan
                </p>
              </div>
            </li>
            <li className="pertama flex items-center relative">
              <div className="timeline-middle flex justify-center absolute top-0 left-1/2 transform -translate-x-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end text-right ml-2 max-w-[calc(50%-1rem)]">
                <time className="font-mono italic text-sm sm:text-base">
                  2022
                </time>
                <div className="text-lg sm:text-xl font-black">
                  Kompetisi Perdana
                </div>
                <p className="text-sm sm:text-base">
                  Mengikuti perlombaan “idea project” dan meraih penghargaan.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default function TentangKami() {
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
    <div id="scroll-container" style={{ height: "100vh", overflow: "hidden" }}>
      <div className="mt-5">
        <Judul className="mx-[80px] max-sm:mx-10 max-sm:mb-3">
          Perjalanan Arisan
        </Judul>
        <Timeline />
        <div className="mt-4 bg-[#FFFBE6] py-5 w-full">
          <Judul className="mx-[80px] max-sm:mx-10">Tim Arisan</Judul>
          <h4 className="mx-[80px] mb-5 max-sm:mx-10">Ayo kenalan!</h4>
          <CardAnggota />
        </div>
        <Judul className="mt-5 text-center text-4xl font-light max-sm:mx-3">
          Ayo Berkolaborasi!
        </Judul>
        <div className="flex justify-center items-center h-full my-5">
          <Button className="rounded-full bg-[#FF9100] text-white ">
            HUBUNGI KAMI
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
