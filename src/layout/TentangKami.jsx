// src/layout/TentangKami.jsx
import { useEffect } from "react";
import Judul from "../components/Judul.jsx";
import CardAnggota from "../components/CardAnggota.jsx";
import Button from "../components/Button.jsx";

const timeline = [
  {
    tahun: 2022,
    title: "First Meet",
    deskripsi: "Pertemuan pertama kali antar sesama anggota tim arisan",
  },
  {
    tahun: 2022,
    title: "First Collaboration",
    deskripsi:
      "Bergerak bersama dalam satu kelompok project dalam tugas perkuliahan",
  },
  {
    tahun: 2022,
    title: "First Competition",
    deskripsi: "Mengikuti perlombaan “idea project” dan meraih ",
  },
];

export default function TentangKami() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mt-5">
        <Judul className="mx-[80px]">Arisan's Journey</Judul>
        <TimeLine />
        <div className="mt-4 bg-[#FFFBE6] py-5 w-full">
          <Judul className="mx-[80px]">Arisan's People</Judul>
          <h4 className="mx-[80px]">Meet our team</h4>
          <CardAnggota />
        </div>
        <Judul className="mt-5 text-center text-5xl font-light">
          Let's Collaborate!!!
        </Judul>
        <div className="flex justify-center items-center h-full my-5">
          <Button className="rounded-full bg-[#FF9100] text-white">
            CONTACT US
          </Button>
        </div>
      </div>
    </>
  );
}

function TimeLine() {
  return (
    <div className="mx-auto w-[80%]">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {timeline.map((data, index) => {
          let positionClass = "";
          if (data.title === "First Collaboration") {
            positionClass = "timeline-end";
          } else if (data.title === "First Competition") {
            positionClass = "timeline-start";
          } else {
            positionClass = "timeline-start";
          }

          if (index === timeline.length - 1) {
            return (
              <li key={data.tahun}>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end">
                  <time className="font-mono italic">{data.tahun}</time>
                  <div className="text-lg font-black">{data.title}</div>
                  {data.deskripsi}
                </div>
              </li>
            );
          }

          return (
            <li key={data.tahun} className={positionClass}>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className={`timeline-content ${positionClass} mb-10 px-2`}>
                <time className="font-mono italic">{data.tahun}</time>
                <div className="text-lg font-black">{data.title}</div>
                {data.deskripsi}
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
