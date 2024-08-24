import gambarTim from "/src/assets/gambar-tim.jpg";
import gambarKota from "/src/assets/gambar-kota.jpg";
import CountUp from "react-countup";

export default function Tentang() {
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
            <a href="#" className="text-green-600">
              Baca selengkapnya
            </a>
          </p>
        </div>
        <div className="flex w-1/2 items-center justify-center gap-16">
          <div className="h-28 w-28 relative">
            <img
              src={gambarKota}
              alt="Gambar kota"
              className="h-full object-cover rounded-full"
            />
            <div className="absolute left-[60px] top-[60px] text-green-600">
              <CountUp end={17} duration={12} className=" text-7xl font-bold" />
              <span>Kota</span>
            </div>
          </div>

          <div className="h-28 w-28 relative">
            <img
              src={gambarTim}
              alt="Gambar Tim"
              className="h-full object-cover rounded-full "
            />
            <div className="absolute left-[60px] top-[60px] text-green-600">
              <CountUp end={42} duration={12} className=" text-7xl font-bold" />
              <span>Tim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
