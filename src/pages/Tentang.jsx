import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import gambarKota from "/src/assets/gambarKota.png";
import gambarTim from "/src/assets/gambar-tim.jpg";

export default function Tentang() {
  const navigate = useNavigate();

  return (
    <section className="tentang mx-[70px]">
      <h1 className="text-center text-2xl font-semibold my-10">Tentang Kami</h1>
      <div className="flex justify-between">
        <div className="w-1/2">
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
        <div className="flex w-1/2 items-center justify-center gap-16">
          <div className="relative">
            <figure className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center">
              <img
                src={gambarKota}
                alt="Gambar kota"
                className="rounded-full border-2 border-white object-cover w-36 h-36"
              />
            </figure>
            <div>
              <div className="absolute left-[100px] top-[95px] bg-green-600 rounded-full p-4 text-white w-20 h-20 flex justify-center items-center">
                <CountUp
                  end={18}
                  duration={12}
                  className="text-3xl font-semibold"
                />
              </div>
              <span className="absolute left-[170px] font-semibold text-xl text-green-600">
                Kota
              </span>
            </div>
          </div>

          <div className="relative">
            <figure className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center">
              <img
                src={gambarTim}
                alt="Gambar kota"
                className="rounded-full border-2 border-white object-cover w-36 h-36"
              />
            </figure>
            <div>
              <div className="absolute left-[100px] top-[95px] bg-green-600 rounded-full p-4 text-white w-20 h-20 flex justify-center items-center">
                <CountUp
                  end={29}
                  duration={12}
                  className="text-3xl font-semibold"
                />
              </div>
              <span className="absolute left-[170px] font-semibold text-xl text-green-600">
                Tim
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
