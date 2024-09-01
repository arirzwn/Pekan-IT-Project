// src/components/Component Video Card/CardVideo.jsx
import React, { useState, useRef } from "react";
import PlayerVideo from "../../layout/PlayerVideo";

// Define the missing components
const Durasi = ({ children }) => (
  <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-1 py-0.5 rounded no-select">
    {children}
  </div>
);
const Judul = ({ children }) => (
  <h3 className="text-lg font-semibold no-select">{children}</h3>
);
const DeskripsiVideo = ({ children }) => (
  <p className="text-sm text-gray-600 no-select">{children}</p>
);

// Define the missing functions
const truncateTitle = (title, maxLength) =>
  title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
const truncateDescription = (description, maxLength) =>
  description.length > maxLength
    ? description.substring(0, maxLength) + "..."
    : description;

const listVideo = [
  {
    thumbnail: "/assets/video4.jpg",
    durasi: "11:35",
    judul:
      "Begini Proses Daur Ulang Sampah Plastik Menjadi Produk Jadi Di Negara Maju",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
    url: "https://youtu.be/GLGcpseaQyc?si=jtrCJkZoPGkQTQbY",
  },
  {
    thumbnail: "/assets/video5.jpg",
    durasi: "05:45",
    judul: "5 Tips Daur Ulang Sampah di Rumah",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
    url: "https://youtu.be/ts0DYCU5cM8?si=e-ld6_h3vuxEHlNV",
  },
  {
    thumbnail: "/assets/video1.png",
    durasi: "07:38",
    judul: "Entire Recyling Process Explained",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
    url: "https://youtu.be/cNPEH0GOhRw?si=C76qSABG4j1wXuro",
  },
  {
    thumbnail: "/assets/video2.jpg",
    durasi: "05:46",
    judul: "What Happens to Your Recycling After It's Collected? \n",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
    url: "https://youtu.be/s4LZwCDaoQM?si=VBsHQfPLIgZJvr7d",
  },
  {
    thumbnail: "/assets/video3.jpeg",
    durasi: "01:21",
    judul: "Importance of Recycling - Animated Video For Kids\n",
    deskripsi:
      "Dalam aktifitas kehidupan modern, kita tidak bisa menghindari produksi sampah plastic. Hal ini karena plastic digunakan hampir disetiap kegiatan sehari-hari, mulai dari....",
    url: "https://www.youtube.com/watch?v=xpAnLXc_bIU&t=3s",
  },
];

function extractVideoId(url) {
  const regex =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

export default function CardVideo() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleCardClick = (video) => {
    const videoId = extractVideoId(video.url);
    setSelectedVideo({ ...video, videoId });
    document.getElementById("my_modal_4").showModal();
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
          <div
            key={index}
            className="w-1/3 h-[400px] flex-shrink-0"
            onClick={() => handleCardClick(video)}
          >
            <figure className="relative overflow-hidden h-52 rounded-md">
              <img
                src={video.thumbnail}
                alt="Thumbnail Video"
                className="w-full"
                draggable="false"
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
      {selectedVideo && (
        <PlayerVideo
          videoUrl={selectedVideo.videoId}
          videoTitle={selectedVideo.judul}
        />
      )}
    </>
  );
}
