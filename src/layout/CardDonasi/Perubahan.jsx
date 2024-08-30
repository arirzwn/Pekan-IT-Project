import atasKiri from "../../assets/kiri-atas.png";
import atasKanan from "../../assets/kanan-atas.png";
import gambarMemberi from "../../assets/icon-memberi.png";
import tengahPertama from "../../assets/tengah-pertama.png";
import tengahKedua from "../../assets/tengah-dua.png";
import tengahKetiga from "../../assets/tengah-tiga.png";
import gambarCycle from "../../assets/icon-cycle.png";
import gambarTanam from "../../assets/icon-menanam.png";
import gambarTumbuh from "../../assets/icon-grow.png";
import kiriBawah from "../../assets/kiri-bawah.png";
import kananBawah from "../../assets/kanan-bawah.png";

export default function Perubahan() {
  return (
    <>
      <div className=" bg-[#FFF9ED] ">
        <div className="dekorasi-atas relative h-full">
          <div className="absolute top-0">
            <figure>
              <img src={atasKiri} alt="Icon" />
            </figure>
          </div>
          <div className="absolute right-0 -top-20">
            <figure>
              <img src={atasKanan} alt="Icon" />
            </figure>
          </div>
        </div>

        <h3 className="text-center pt-5 pb-10 font-semibold text-[#678D72] text-2xl">
          Bagaimana Donasi Anda Membuat Perubahan?
        </h3>

        <div className="flex flex-col  mx-auto w-3/5 ">
          <div className="story flex flex-col relative">
            <div className="flex flex-col items-center w-[335px] ">
              <figure className="gambar-satu">
                <img src={gambarMemberi} alt="" />
              </figure>
              <div className="text-center">
                <h6 className="font-bold">Donasi Diterima</h6>
                <p className="text-sm">
                  Donasi Anda diterima melalui platform kami dan diproses dengan
                  aman
                </p>
              </div>
            </div>
            <div className="relative h-full">
              <div className="dekorasi absolute flex justify-center items-center w-full top-6">
                <figure className="w-52 rotate-12">
                  <img src={tengahPertama} alt="Icon" />
                </figure>
              </div>
              <div className="top-56 left-72 -rotate-12 absolute">
                <figure>
                  <img src={tengahKedua} alt="Icon" className="w-52" />
                </figure>
              </div>
              <div className="absolute top-[530px] rotate-12 right-64 w-56 ">
                <figure>
                  <img src={tengahKetiga} alt="Icon" />
                </figure>
              </div>
            </div>
            <div className="gambar-dua flex flex-col items-center w-[335px] self-end mt-10">
              <figure>
                <img src={gambarCycle} />
              </figure>
              <div className="text-center mt-4">
                <h6 className="font-bold">Donasi Diterima</h6>
                <p className="text-sm">
                  Dana yang terkumpul dialokasikan untuk berbagai program
                  lingkungan, seperti penanaman pohon, konservasi air, dan
                  program edukasi
                </p>
              </div>
            </div>
            <div className="gambar-tiga mt-10 flex flex-col items-center w-[335px]">
              <figure>
                <img src={gambarTanam} alt="" />
              </figure>
              <div className="text-center mt-4">
                <h6 className="font-bold">Pelaksanaan Kegiatan</h6>
                <p className="text-sm">
                  Tim kami di lapangan melaksanakan kegiatan sesuai rencana,
                  memastikan setiap donasi membawa dampak nyata bagi alam
                </p>
              </div>
            </div>
            <div className="gambar-empat flex flex-col items-center w-[335px] self-end mt-10">
              <figure>
                <img src={gambarTumbuh} alt="" />
              </figure>
              <div className="text-center mt-4">
                <h6 className="font-bold">Pelaporan dan Dokumentasi</h6>
                <p className="text-sm">
                  Kami mendokumentasikan semua kegiatan dan hasil dari program
                  yang didanai oleh donasi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="dekorasi-bawah relative h-32">
          <div className="absolute -bottom-14 left-0">
            <figure>
              <img src={kiriBawah} alt="icon" />
            </figure>
          </div>
          <div className="absolute right-0 -bottom-16 -rotate-12 ">
            <figure>
              <img src={kananBawah} alt="icon" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
