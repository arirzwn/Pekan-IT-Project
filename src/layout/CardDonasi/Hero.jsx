import Button from "../../components/Button.jsx";
import gambarTangan from "/src/assets/gambartangan.png";

export default function Hero() {
  return (
    <>
      {/* Desktop */}
      <div className="bg-[#DEF9C4] h-screen flex items-center hidden xl:flex">
        <div className="w-1/2 ml-20 flex flex-col gap-y-4">
          <h1 className="text-4xl font-semibold text-[#47A603]">
            Kecil untuk Anda, <br />
            Besar untuk Bumi.
          </h1>
          <p className="text-justify">
            Donasi Anda membantu kami menjalankan program konservasi, edukasi
            lingkungan, dan kegiatan lainnya yang bertujuan melindungi planet
            kita. Setiap rupiah yang Anda sumbangkan sangat berarti bagi masa
            depan bumi.
          </p>
          <Button className="text-white w-1/2">Donasikan sekarang!</Button>
        </div>
        <div className="w-1/2">
          <figure className="">
            <img src={gambarTangan} alt="Gambar" />
          </figure>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-[#DEF9C4] h-screen  xl:hidden">
        <div className="mx-6 flex flex-col gap-y-4 pt-20">
          <h1 className="text-2xl font-semibold text-[#47A603]">
            Kecil untuk Anda, <br />
            Besar untuk Bumi.
          </h1>
          <p className="text-justify">
            Donasi Anda membantu kami menjalankan program konservasi, edukasi
            lingkungan, dan kegiatan lainnya yang bertujuan melindungi planet
            kita. Setiap rupiah yang Anda sumbangkan sangat berarti bagi masa
            depan bumi.
          </p>
          <Button className="text-white w-1/2">Donasikan sekarang!</Button>
        </div>
        <div className="overflow-hidden mt-14">
          <figure className=" pl-28">
            <img src={gambarTangan} alt="Gambar" />
          </figure>
        </div>
      </div>
    </>
  );
}
