import { useState } from "react";
import "/src/index.css";
import DetailAnggota from "../layout/DetailAnggota";
import fotoProfile1 from "../assets/foto-ari.png";
import fotoProfile2 from "../assets/foto-adit.png";
import fotoProfile3 from "../assets/foto-ikhsan.png";
import fotoProfile4 from "../assets/foto-risma.png";

const dataAnggota = [
  {
    img: fotoProfile1,
    nama: "Ari Rizwan",
    jabatan: "Founder",
    moto: "Mahasiswa Informatika yang berambisi menjadi seorang full-stack developer yang kompeten. Memiliki minat yang besar dalam merancang dan membangun aplikasi web yang inovatif dan user-friendly. Terbuka untuk kesempatan magang atau kerja part-time di perusahaan startup.",
    sosmed: {
      github: "https://github.com/arirzwn",
      linkdn: "https://www.linkedin.com/in/ari-rizwan-70666918b/",
      ig: "https://www.instagram.com/ari.rzw.n/",
      fb: "https://www.facebook.com/",
    },
  },
  {
    img: fotoProfile2,
    nama: "Aditya Daffa Syahputra",
    jabatan: "Founder",
    moto: "Mahasiswa semester 5 Informatika di Universitas Singaperbangsa Karawang dengan minat khusus dalam Software  Development terutama sebagai back-end developer. Memiliki semangat tinggi untuk mempelajari teknologi baru dan meningkatkan keterampilan. Dikenal sebagai individu disiplin, terampil, dan gigih dalam menyelesaikan masalah.",
    sosmed: {
      github: "https://github.com/",
      linkdn: "https://www.linkedin.com/",
      ig: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
    },
  },
  {
    img: fotoProfile4,
    nama: "Risma Auliya Salsabilla",
    jabatan: "Founder",
    moto: "Antusias dalam dunia pengembangan perangkat lunak, selalu mengikuti perkembangan teknologi terkini seperti machine learning dan cloud computing. Aktif berkontribusi dalam komunitas open source dan mengikuti berbagai kursus online untuk memperdalam pengetahuan.",
    sosmed: {
      github: "https://github.com/",
      linkdn: "https://www.linkedin.com/",
      ig: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
    },
  },
  {
    img: fotoProfile3,
    nama: "M. Ikhsan Rizki Yanuar",
    jabatan: "Founder",
    moto: "Menguasai bahasa pemrograman Python dan JavaScript dengan baik. Memiliki pemahaman yang kuat tentang struktur data, algoritma, dan desain database. Terampil dalam membangun aplikasi web yang scalable dan performant menggunakan framework seperti Django dan React.",
    sosmed: {
      github: "https://github.com/",
      linkdn: "https://www.linkedin.com/",
      ig: "https://www.instagram.com/",
      fb: "https://www.facebook.com/",
    },
  },
];

export default function CardAnggota() {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleImageClick = (member) => {
    setSelectedMember(member);
    document.getElementById("my_modal_3").showModal();
  };

  return (
    <>
      <div className="flex items-center justify-center gap-4 mb-24">
        {dataAnggota.map((data, index) => (
          <div key={index} className="card-container max-w-56 max-h-56">
            <figure className="w-56 h-56">
              <img
                src={data.img}
                alt="Foto profile"
                className="rounded-sm aspect-square object-cover cursor-pointer"
                onClick={() => handleImageClick(data)}
              />
            </figure>
            <div className="flex flex-col justify-between mt-2 w-56 text-center">
              <p className="font-semibold break-words">{data.nama}</p>
              <p className="break-words text-[#FF9100] font-semibold">
                {data.jabatan}
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedMember && <DetailAnggota member={selectedMember} />}
    </>
  );
}
