import GambarNews from "/src/assets/Gambar-news.png";
import GambarNews2 from "/src/assets/Gambar-News2.png";
import GambarJualan from "/src/assets/gambar-jualan.png";
import Button from "../components/Button.jsx";
import Box from "../components/Box.jsx";

export default function News() {
  return (
    <>
      <div className="my-20 bg-[#A2CA7C]">
        <h1 className="text-2xl font-semibold text-center mt-10 mb-10">News</h1>
        <div className="flex justify-center  gap-10 mx-[60px]">
          <div className="col-span-1 border border-black rounded-md">
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
                <Button className="border-none h-[40px] text-white mt-[13px] rounded-full">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-0">
            <div className="kotaksatu col-span-1">
              <div className="relative box rounded-[20px] overflow-hidden">
                <img
                  className="rounded-tl-[20px] w-full h-full object-cover"
                  src={GambarNews2}
                  alt="Gambar 2"
                />
                <div className="absolute top-0 left-0 bg-[#47a603] text-white px-3 py-1.5 rounded-tl-[20px] rounded-br-[20px] text-xs font-light">
                  Kegiatan
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#1E4800] bg-opacity-50 rounded-md backdrop-blur-[1px] text-white p-4 m-2">
                  <h5 className="font-semibold">Bersih-Bersih Bersama</h5>
                  <p className="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Perferendis, recusandae!
                  </p>
                </div>
              </div>
            </div>
            <div className="kotakdua col-span-1">
              <Box className="text-2xl bg-[#47a603] rounded-xl">
                Ayo berkontribusi untuk menjaga bumi kita agar hidup lebih
                sehat.
              </Box>
            </div>
            <div className="col-span-2 border border-black rounded-xl">
              <div className="flex gap-4">
                <div className="h-full w-full">
                  <img
                    src={GambarJualan}
                    alt="Gambar Jualan"
                    className=" object-cover"
                  />
                </div>
                <div>
                  <span>Toko</span>
                  <h5 className="font-bold">Botol Minum Keren</h5>
                  <p className="text-sm my-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    aperiam assumenda autem corporis cumque distinctio dolorem
                    doloremque eos facilis, fuga, id ipsam iste maiores minima
                    molestiae nam natus nesciunt nihil nisi nulla quas quia quo
                    sapiente tenetur ullam veniam, vitae.
                  </p>
                  <span className="font-bold">Rp255.420</span>
                  <div className="my-2">
                    <Button className="rounded-full text-white border-none">
                      Lihat Produk
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}

{
  /*<div className="flex gap-5 px-10 justify-center">*/
}
{
  /*  <div className="">*/
}
{
  /*    <div className="w-[524px] h-[637px]">*/
}
{
  /*      <img src={GambarNews} alt="Gambar 5" />*/
}
{
  /*      <div className="px-[36px]">*/
}
{
  /*        <h3 className="text-[20px] font-semibold mt-[30px] mb-[10px]">*/
}
{
  /*          Pengelolaan Sampah Bersama UMKM*/
}
{
  /*        </h3>*/
}
{
  /*        <p className="text-sm text-justify">*/
}
{
  /*          Lorem ipsum dolor sit amet consectetur. Aliquam augue faucibus*/
}
{
  /*          fermentum accumsan nec consectetur a quis aliquet. Pretium*/
}
{
  /*          orci aenean felis ut sagittis diam consectetur diam. Enim*/
}
{
  /*          dolor et quis laoreet. Elit amet amet amet diam odio. Eget*/
}
{
  /*          imperdiet penatibus ac convallis. Dictum morbi viverra amet at*/
}
{
  /*          diam. Sollicitudin aliquam non turpis proin. Eget semper*/
}
{
  /*          habitant interdum ut mollis. Etiam egestas diam vel vitae.*/
}
{
  /*        </p>*/
}
{
  /*        <Button className="border-none h-[40px] text-white  mt-[13px] rounded-full">*/
}
{
  /*          Selengkapnya*/
}
{
  /*        </Button>*/
}
{
  /*      </div>*/
}
{
  /*    </div>*/
}
{
  /*  </div>*/
}
{
  /*  <div className="relative box rounded-[20px] overflow-hidden">*/
}
{
  /*    <img*/
}
{
  /*      className="rounded-tl-[20px]"*/
}
{
  /*      src={GambarNews2}*/
}
{
  /*      alt="Gambar 2"*/
}
{
  /*    />*/
}
{
  /*    <div className="absolute top-0 left-0 bg-[#47a603] text-white px-3 py-1.5 rounded-tl-[20px] rounded-br-[20px]  text-xs font-light">*/
}
{
  /*      Kegiatan*/
}
{
  /*    </div>*/
}
{
  /*    <div className="absolute bottom-0 left-0 right-0  bg-[#1E4800] bg-opacity-50 rounded-md   backdrop-blur-[1px] text-white p-4 m-2">*/
}
{
  /*      <h5 className="font-semibold">Bersih-Bersih Bersama</h5>*/
}
{
  /*      <p className="text-xs">*/
}
{
  /*        Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/
}
{
  /*        Perferendis, recusandae!*/
}
{
  /*      </p>*/
}
{
  /*    </div>*/
}
{
  /*  </div>*/
}
{
  /*  <Box className="text-2xl bg-[#47a603] rounded-xl ">*/
}
{
  /*    Ayo berkontribusi untuk menjaga bumi kita agar hidup lebih sehat.{" "}*/
}
{
  /*  </Box>*/
}
{
  /*</div>*/
}
