import "../../index.css";
import React, { useState, useRef } from "react";
import Judul from "./Judul.jsx";
import Durasi from "./Durasi.jsx";
import DeskripsiVideo from "./DeskripsiVideo.jsx";

const listVideo = [
  {
    thumbnail: "/src/assets/video3.jpeg",
    durasi: "05:23",
    judul:
      "Mengisi kegiatan di rumah dengan memanfaatkan paralon untuk hidroponik",
    deskripsi:
      "Hidroponik adalah metode bercocok tanam yang menggunakan air dan larutan nutrisi sebagai pengganti tanah.",
  },
  {
    thumbnail: "/src/assets/video2.jpeg",
    durasi: "06:12",
    judul: "Mengenal “bank” sampah",
    deskripsi:
      "Tempat untuk mengumpulkan dan memilah sampah kering, yang dijalankan seperti bank, di mana masyarakat dapat menabung sampah dan mendapatkan uang",
  },
  {
    thumbnail: "/src/assets/video1.png",
    durasi: "07:11",
    judul: "Reduce, Reuse, Recycle : “Apa itu?”",
    deskripsi:
      "prinsip pengelolaan sampah yang efektif untuk mengurangi jumlah sampah yang dihasilkan dan memanfaatkan kembali sampah yang dapat didaur ulang",
  },
  {
    thumbnail: "/src/assets/video4.jpeg",
    durasi: "08:00",
    judul:
      "Begini Proses Daur Ulang Sampah Plastik Menjadi Produk Jadi Di Negara Maju",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
  },
  {
    thumbnail: "/src/assets/video4.jpeg",
    durasi: "09:00",
    judul:
      "Begini Proses Daur Ulang Sampah Plastik Menjadi Produk Jadi Di Negara Maju",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
  },
];

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    const truncated = text.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  }
  return text;
}

function truncateTitle(title, maxLength) {
  return truncateText(title, maxLength);
}

function truncateDescription(description, maxLength) {
  if (description.length > maxLength) {
    const truncated = description.substring(0, maxLength);
    return truncated.substring(0, truncated.lastIndexOf(" ")) + "...";
  }
  return description;
}

export default function CardVideo() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); // Prevent default drag behavior
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      <div
        className="mt-6 flex gap-x-4 overflow-x-scroll no-scrollbar"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {listVideo.map((video, index) => (
          <div key={index} className="w-1/3 h-[420px] flex-shrink-0">
            <figure className="relative overflow-hidden h-52 rounded-md">
              <img
                src={video.thumbnail}
                alt="Thumbnail Video"
                className="w-full"
              />
              <Durasi>{video.durasi}</Durasi>
            </figure>
            <div className="h-14">
              <Judul>{truncateTitle(video.judul, 55)}</Judul>
            </div>
            <DeskripsiVideo>
              {truncateDescription(video.deskripsi, 104)}
            </DeskripsiVideo>
          </div>
        ))}
      </div>
    </>
  );
}
