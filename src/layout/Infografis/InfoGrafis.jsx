import { Card } from "../../components/Card.jsx";
import gambarKiri from "/src/assets/gambar-hero-kiri.png";
import gambarKanan from "/src/assets/gambar-hero-kanan.png";
import gambarDonate from "/src/assets/gambar-donate.png";
import gambarUtama from "/src/assets/gambar-utama.png";
import kanan from "/src/assets/hero-kanan.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function InfoGrafis() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2, // Start from the third item
    autoplay: true, // Enable auto scroll
    autoplaySpeed: 2400, // Set auto scroll interval to 3 seconds
    responsive: [
      {
        breakpoint: 640, // max-sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-10 max-sm:w-[50%] max-sm:mx-auto">
        <div className="hidden max-sm:block">
          <Slider {...settings}>
            <div className="flex justify-center items-center">
              <Card gambar={gambarKiri} className="w-full h-auto" />
            </div>
            <div className="flex justify-center items-center">
              <Card
                gambar={gambarDonate}
                className="w-full h-auto"
                teks="Donate and help the environment"
              />
            </div>
            <div className="flex justify-center items-center">
              <Card
                gambar={gambarUtama}
                className="w-full h-auto"
                teks="Share with us your result"
              />
            </div>
            <div className="flex justify-center items-center text-center w-full h-auto">
              <figure>
                <img src={kanan} alt="" draggable="false" />
              </figure>
            </div>
            <div className="flex justify-center items-center">
              <Card gambar={gambarKanan} className="w-full h-auto" />
            </div>
          </Slider>
        </div>
        <div className="flex justify-between items-center max-sm:hidden">
          <Card gambar={gambarKiri} className="w-[238px] h-[116px]" />
          <Card
            gambar={gambarDonate}
            className="w-[238px] h-[275px]"
            teks="Donate and help the environment"
          />
          <Card
            gambar={gambarUtama}
            className="w-[236px] h-[364px]"
            teks="Share with us your result"
          />
          <div className="text-center w-[238px] h-[275px]">
            <figure>
              <img src={kanan} alt="" draggable="false" />
            </figure>
          </div>
          <Card gambar={gambarKanan} className="w-[238px] h-[116px]" />
        </div>
      </div>
    </>
  );
}
