import { Card } from "../../components/Card.jsx";
import gambarKiri from "/src/assets/gambar-hero-kiri.png";
import gambarKanan from "/src/assets/gambar-hero-kanan.png";

export function InfoGrafis() {
  return (
    <>
      <div className="flex  justify-between items-center mt-10 ">
        <Card gambar={gambarKiri} className="w-[238px] h-[116px]" />{" "}
        <Card
          gambar="/src/assets/gambar-donate.png"
          className="w-[238px] h-[275px] "
          teks="Donate and help the environtment"
        />{" "}
        <Card
          gambar="/src/assets/gambar-utama.png"
          className="w-[236px] h-[364px]"
          teks=" Share with us your result"
        />
        <div className=" text-center w-[238px] h-[275px]">
          <div className="bg-gray-300 rounded-[30px] z-0 ">
            <p>
              Lebih dari 123 pohon ditanam dengan bantuan para aktivis kami.
            </p>
          </div>
          <div className="bg-green-500 rounded-xl z-10 h-32">
            <p>
              3 program pendidikan diresmikan dan dikembangkan oleh spesialis
              kami untuk pendidikan anak-anak.
            </p>
          </div>
        </div>
        <Card gambar={gambarKanan} className="w-[238px] h-[116px]" />{" "}
      </div>
    </>
  );
}
