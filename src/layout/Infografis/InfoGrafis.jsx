import { Card } from "../../components/Card.jsx";
import gambarKiri from "/src/assets/gambar-hero-kiri.png";
import gambarKanan from "/src/assets/gambar-hero-kanan.png";
import gambarDonate from "/src/assets/gambar-donate.png";
import gambarUtama from "/src/assets/gambar-utama.png";
import kanan from "/src/assets/hero-kanan.png";

export function InfoGrafis() {
  return (
    <>
      <div className="flex  justify-between items-center mt-10 ">
        <Card gambar={gambarKiri} className="w-[238px] h-[116px]" />{" "}
        <Card
          gambar={gambarDonate}
          className="w-[238px] h-[275px] "
          teks="Donate and help the environtment"
        />{" "}
        <Card
          gambar={gambarUtama}
          className="w-[236px] h-[364px]"
          teks=" Share with us your result"
        />
        <div className="text-center w-[238px] h-[275px]">
          <figure>
            <img src={kanan} alt="" draggable="false" />
          </figure>
        </div>
        <Card gambar={gambarKanan} className="w-[238px] h-[116px]" />{" "}
      </div>
    </>
  );
}
