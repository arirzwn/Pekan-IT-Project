import { useEffect, useState, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import banner from "../assets/Banner.png";

export default function TeksHijaukan() {
  const [startTyping, setStartTyping] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setStartTyping(true);
          }, 500); // 500ms delay before starting the animation
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="mt-16" ref={elementRef}>
      <figure className="relative w-full h-full flex items-center justify-center">
        <img src={banner} alt="Gambar Banner" className="w-full h-full" />
        <span className="absolute text-4xl font-light text-white">
          {startTyping && (
            <Typewriter
              words={[
                "Lingkungan Lebih Sehat, Hidup Lebih Bahagia.",
                "Jangan Biarkan Bumi Menangis, Lindungi Alam Kita.",
                "Gotong Royong Bersihkan Bumi, Indonesia Lebih Asri.",
              ]}
              loop={1}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          )}
        </span>
      </figure>
    </div>
  );
}
