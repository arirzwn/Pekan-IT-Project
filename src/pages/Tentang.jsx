import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import gambarKota from "/src/assets/gambarKota.png";
import gambarTim from "/src/assets/gambar-tim.jpg";

export default function Tentang() {
  const navigate = useNavigate();
  const { ref: kotaRef, inView: kotaInView } = useInView({ triggerOnce: true });
  const { ref: timRef, inView: timInView } = useInView({ triggerOnce: true });

  return (
    <section className="tentang mx-[70px]">
      <h1 className="text-center text-2xl font-semibold my-10">Tentang Kami</h1>
      <div className="flex flex-col-reverse max-sm:flex-col xl:flex-row xl:justify-between">
        <div className="konten-pertama w-full max-sm:hidden xl:w-1/2">
          <p className="leading-7 text-justify">
            Perjalanan Secondlife dalam mewujudkan visi misinya sudah menempuh
            beberapa tempat dengan tantangan dan keunikan dari masing-masing
            tempat yang berbeda
            <br />
            <button
              onClick={() => navigate("/tentang-kami")}
              className="text-green-600"
            >
              Baca selengkapnya
            </button>
          </p>
        </div>

        <div className="konten-kedua flex w-full max-sm:w-full max-sm:flex-row max-sm:justify-between items-center justify-center gap-16 xl:w-1/2">
          <div className="relative" ref={kotaRef}>
            <figure className="w-40 h-40 max-sm:w-28 max-sm:h-28 max-sm:rounded-full rounded-full border-4 max-sm:border-4 border-green-500 flex items-center justify-center">
              <img
                src={gambarKota}
                alt="Gambar kota"
                className="rounded-full border-2 border-white object-cover w-36 h-36 max-sm:w-full max-sm:h-full"
              />
            </figure>
            <div>
              <div className="absolute left-[100px] top-[95px] bg-green-600 rounded-full p-4 text-white w-20 h-20 flex justify-center items-center max-sm:w-14 max-sm:h-14 max-sm:left-[60px] max-sm:top-[70px]">
                <CountUp
                  start={0}
                  end={kotaInView ? 18 : 0}
                  duration={12}
                  className="text-3xl font-semibold max-sm:text-xl"
                />
              </div>
              <span className="absolute left-[170px] font-semibold text-xl text-green-600 max-sm:text-xl max-sm:left-[110px]">
                Kota
              </span>
            </div>
          </div>

          <div className="relative" ref={timRef}>
            <figure className="w-40 h-40 max-sm:w-28 max-sm:h-28 max-sm:rounded-full rounded-full border-4 max-sm:border-4 border-green-500 flex items-center justify-center">
              <img
                src={gambarTim}
                alt="Gambar tim"
                className="rounded-full border-2 border-white object-cover w-36 h-36 max-sm:w-full max-sm:h-full"
              />
            </figure>
            <div>
              <div className="absolute left-[100px] top-[95px] bg-green-600 rounded-full p-4 text-white w-20 h-20 flex justify-center items-center max-sm:w-14 max-sm:h-14 max-sm:left-[60px] max-sm:top-[70px]">
                <CountUp
                  start={0}
                  end={timInView ? 29 : 0}
                  duration={12}
                  className="text-3xl font-semibold max-sm:text-xl"
                />
              </div>
              <span className="absolute left-[170px] font-semibold text-xl text-green-600 max-sm:text-xl max-sm:left-[110px]">
                Tim
              </span>
            </div>
          </div>
        </div>

        <div className="konten-pertama w-full max-sm:block xl:hidden max-sm:mt-16">
          <p className="leading-7 text-justify">
            Perjalanan Secondlife dalam mewujudkan visi misinya sudah menempuh
            beberapa tempat dengan tantangan dan keunikan dari masing-masing
            tempat yang berbeda
            <br />
            <button
              onClick={() => navigate("/tentang-kami")}
              className="text-green-600"
            >
              Baca selengkapnya
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
