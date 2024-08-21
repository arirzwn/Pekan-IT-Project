import GambarNews from "/src/assets/Gambar-news.png";
import GambarNews2 from "/src/assets/Gambar-News2.png";
import Button from "../components/Button.jsx";
import Box from "../components/Box.jsx";

export default function News() {
  return (
    <>
      <div className="my-20 bg-[#A2CA7C]">
        <h1 className="text-2xl font-semibold text-center mt-10 mb-10">News</h1>
        <div className="flex gap-5 px-10 justify-center">
          <div className="">
            <div className="w-[524px] h-[637px]">
              <img src={GambarNews} alt="Gambar 5" />
              <div className="px-[36px]">
                <h3 className="text-[20px] font-semibold mt-[30px] mb-[10px]">
                  Pengelolaan Sampah Bersama UMKM
                </h3>
                <p className="text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur. Aliquam augue faucibus
                  fermentum accumsan nec consectetur a quis aliquet. Pretium
                  orci aenean felis ut sagittis diam consectetur diam. Enim
                  dolor et quis laoreet. Elit amet amet amet diam odio. Eget
                  imperdiet penatibus ac convallis. Dictum morbi viverra amet at
                  diam. Sollicitudin aliquam non turpis proin. Eget semper
                  habitant interdum ut mollis. Etiam egestas diam vel vitae.
                </p>
                <Button className="border-none h-[40px] text-white  mt-[13px] rounded-full">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
          <div className="box">
            <img src={GambarNews2} alt="Gambar 2" />
          </div>
          <Box className="text-2xl bg-[#47a603] rounded-xl ">
            Ayo berkontribusi untuk menjaga bumi kita agar hidup lebih sehat.{" "}
          </Box>
        </div>
      </div>
    </>
  );
}
