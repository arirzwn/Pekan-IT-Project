import fotoProfile1 from "../assets/foto-ari.png";
import fotoProfile2 from "../assets/foto-adit.png";
import fotoProfile3 from "../assets/foto-risma.png";
import fotoProfile4 from "../assets/foto-ikhsan.png";

const dataAnggota = [
  { img: fotoProfile1, nama: "Ari Rizwan", jabatan: "Founder" },
  { img: fotoProfile2, nama: "Aditya Daffa Syahputra", jabatan: "Founder" },
  { img: fotoProfile4, nama: "Risma Auliya Salsabilla", jabatan: "Founder" },
  { img: fotoProfile3, nama: "M. Ikhsan Rizki Yanuar", jabatan: "Founder" },
];

export default function CardAnggota() {
  return (
    <>
      {/*  Hapus MB */}
      <div className="flex items-center justify-center gap-4  mb-24  ">
        {dataAnggota.map((data, index) => (
          <div key={index} className="max-w-56 max-h-56">
            <figure className="w-56 h-56">
              <img
                src={data.img}
                alt="Foto profile"
                className="rounded-sm aspect-square object-cover"
              />
            </figure>
            <div className=" flex flex-col justify-between mt-2 w-56 text-center">
              <p className="font-semibold break-words">{data.nama}</p>
              <p className="break-words text-[#FF9100] font-semibold">
                {data.jabatan}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
