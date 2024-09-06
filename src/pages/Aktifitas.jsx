import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import gambar1 from "/src/assets/gambar-1.png";
import gambar2 from "/src/assets/gambar-2.png";
import gambar3 from "/src/assets/gambar-3.png";
import gambar4 from "/src/assets/gambar-4.png";
import gambar5 from "/src/assets/gambar-5.png";
import gambar6 from "/src/assets/gambar-6.png";
import gambar7 from "/src/assets/gambar-7.png";

const variants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.5, duration: 2 },
  }),
};

export default function Aktifitas() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "auto";
    }
  }, [inView]);

  return (
    <>
      <div id="aktifitas" ref={sectionRef}>
        <h1 className="my-10 font-bold text-2xl text-center">Aksi Kami</h1>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 mx-[70px] gap-3">
        {[gambar1, gambar2, gambar3, gambar4, gambar5, gambar6, gambar7].map(
          (gambar, index) => (
            <motion.figure
              key={index}
              className={`h-[200px] overflow-hidden rounded-md ${index === 0 ? "col-span-3" : ""} ${index === 1 ? "col-start-4" : ""} ${index === 2 ? "col-span-2 row-start-2" : ""} ${index === 3 ? "col-span-2 col-start-3 row-start-2" : ""} ${index === 4 ? "row-start-3" : ""} ${index === 5 ? "col-span-2 row-start-3" : ""} ${index === 6 ? "col-start-4 row-start-3" : ""}`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              custom={index}
            >
              <img
                src={gambar}
                className={index === 1 || index === 6 ? "scale-110" : ""}
              />
            </motion.figure>
          ),
        )}
      </div>
    </>
  );
}
