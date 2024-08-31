// src/layout/CardDonasi/Donation.jsx
import { useEffect } from "react";
import Perubahan from "./Perubahan.jsx";
import CardDonasi from "./CardDonasi.jsx";

export default function Donation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <Perubahan />
        <div className="flex mx-[70px] gap-10 items-center justify-center h-screen">
          <div className="w-1/2">
            <CardDonasi />
          </div>
          <div className="w-1/2">
            <h1 className="text-4xl font-semibold text-[#47A603] leading-snug">
              Setiap Rupiah <br /> untuk Lingkungan
            </h1>
            <p className="leading-7">
              Setiap rupiah yang Anda sumbangkan membantu kami melindungi dan
              melestarikan alam. Dengan dukungan Anda, kami dapat menjalankan
              berbagai program lingkungan yang berdampak nyata. <br /> <br />{" "}
              Kontribusi Anda, sekecil apapun, memberikan harapan bagi bumi dan
              generasi mendatang. Mari bersama-sama berbuat baik untuk planet
              kita. <br /> <br /> Donasi sekarang dan jadilah bagian dari
              perubahan positif untuk lingkungan!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
