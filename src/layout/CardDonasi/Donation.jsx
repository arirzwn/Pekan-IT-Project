import gambar from "/src/assets/gambartangan.png";
import Navbar from "/src/layout/Navbar/Navbar.jsx";
import Button from "/src/components/Button.jsx";
import Perubahan from "./Perubahan.jsx";
import CardDonasi from "./CardDonasi.jsx";
import Footer from "../Footer/Footer.jsx";

export default function Donasi() {
  return (
    <>
      <Navbar />
      <div className="bg-[#DEF9C4] min-h-screen flex items-center relative">
        <div className="mx-[70px]  grid grid-cols-2 items-center w-full relative z-10">
          <div className="col-span-1">
            <h1 className="text-5xl font-semibold">
              Kecil untuk Anda, <br /> Besar untuk bumi.{" "}
            </h1>
            <p className="mt-5 leading-7">
              Donasi Anda membantu kami menjalankan program konservasi, edukasi
              lingkungan, dan kegiatan lainnya yang bertujuan melindungi planet
              kita. Setiap rupiah yang Anda sumbangkan sangat berarti bagi masa
              depan bumi.
            </p>
            <Button className="mt-5 text-white">Donasikan Sekarang!</Button>
          </div>
        </div>
        <figure className="absolute right-0 bottom-0 z-0 flex items-center h-full">
          <img src={gambar} alt="Gambar" className="h-auto" />
        </figure>
      </div>
      <Perubahan />
      <CardDonasi />
      <Footer />
    </>
  );
}
