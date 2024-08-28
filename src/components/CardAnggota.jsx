import fotoProfile1 from "../assets/background-image.jpg";
import fotoProfile2 from "../assets/background-image.jpg";
import fotoProfile3 from "../assets/background-image.jpg";
import fotoProfile4 from "../assets/background-image.jpg";

const dataAnggota = [
  { img: fotoProfile1, nama: "Ari Rizwan", jabatan: "CEO" },
  { img: fotoProfile2, nama: "Aditya Daffa Syahputra", jabatan: "CEO" },
  { img: fotoProfile3, nama: "M. Ikhsan Rizki Yanuar", jabatan: "CEO" },
  { img: fotoProfile4, nama: "Risma Salsabila Aulia", jabatan: "CEO" },
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
              <p className="break-words">{data.jabatan}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
