import GambarNews from "/src/assets/Gambar-news.png";
import GambarNews2 from "/src/assets/Gambar-News2.png";
import GambarJualan from "/src/assets/gambar-jualan.png";
import Button from "../components/Button.jsx";
import Box from "../components/Box.jsx";

export default function News() {
  return (
    <>
      <div className=" bg-[#D5ED9F]">
        <h1 className="py-6  text-white text-2xl font-semibold text-center ">
          News
        </h1>
        <div className=" pb-10 mx-auto  grid grid-cols-2 justify-center  gap-4 max-w-5xl ">
          {/*kiri*/}
          <div className="col-start-1 rounded-md bg-white">
            <div className="col-start-1">
              <figure className="overflow-hidden rounded-md">
                <img src={GambarNews} alt="Gambar 5" className="scale-110" />
              </figure>
              <div className="px-8 ">
                <h3 className="text-[20px] font-semibold mt-4 mb-2">
                  Pengelolaan Sampah Bersama UMKM
                </h3>
                <p className="text-sm text-justify leading-loose">
                  Pengelolaan limbah sampah organik dan non organik berdampak
                  pada kenyamanan di lingkungan perumahan di daerah Cileungsi
                  mempunyai dampak yang kurang baik bagi lingkungan. Dalam
                  proses pengelolaan sampah organic ini menggunakan alat
                  pencacah, dimana perlu adanya pelatihan tentang tata cara
                  pengoperasian maupun perawatan yang baik dan benar.
                </p>
                <Button className="border-none h-[40px] text-white my-4 rounded-full">
                  Selengkapnya
                </Button>
              </div>
            </div>
          </div>

          {/*Kanan*/}
          <div className=" col-start-2 grid  grid-rows-2 gap-y-3">
            <div className="grid grid-cols-2 gap-x-3 border border-black">
              {/*kotak satu*/}
              <div className="kotaksatu col-start-1">
                <div className="relative  rounded-[20px] overflow-hidden ">
                  <figure className=" rounded-md overflow-hidden">
                    <img
                      className="rounded-tl-[20px] "
                      src={GambarNews2}
                      alt="Gambar 2"
                    />
                  </figure>
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
              {/*Kotak dua*/}
              <Box className="col-start-2 text-2xl bg-[#47a603] h-full rounded-xl p-4">
                Ayo berkontribusi untuk menjaga bumi kita agar hidup lebih
                sehat.
              </Box>
            </div>
            {/*Bagian bawah*/}
            <div className="border border-black  rounded-xl">
              <div className="flex h-full gap-4">
                <figure className="w-1/2 h-full">
                  <img
                    src={GambarJualan}
                    alt="Gambar Jualan"
                    className="rounded-md h-full"
                  />
                </figure>
                <div className="w-1/2">
                  <span>Toko</span>
                  <h5 className="font-bold">Botol Minum Keren</h5>
                  <p className="text-sm my-3 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                    magnam modi officia quos vitae? Iusto.
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
