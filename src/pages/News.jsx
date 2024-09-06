import GambarNews from "/src/assets/Gambar-news.png";
import GambarNews2 from "/src/assets/Gambar-News2.png";
import GambarJualan from "/src/assets/gambar-jualan.png";
import Button from "../components/Button.jsx";
import Box from "../components/Box.jsx";

export default function News() {
  return (
    <>
      <div>
        {/* Desktop */}
        <div id="berita" className="bg-[#D5ED9F] hidden sm:block">
          <h1 className="py-6 text-2xl font-semibold text-center text-black">
            Berita
          </h1>
          <div className="px-20 pb-10 mx-auto grid grid-cols-2 justify-center gap-4">
            {/*kiri*/}
            <div className="col-start-1 rounded-xl bg-white">
              <div className="col-start-1">
                <figure className="overflow-hidden rounded-xl">
                  <img src={GambarNews} alt="Gambar 5" className="scale-110" />
                </figure>
                <div className="px-8">
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
            <div className="col-start-2 grid grid-rows-2 gap-y-3">
              <div className="grid grid-cols-2 gap-x-3">
                {/*kotak satu*/}
                <div className="kotaksatu col-start-1">
                  <div className="relative rounded-[20px] overflow-hidden">
                    <figure className="rounded-md overflow-hidden">
                      <img
                        className="rounded-tl-[20px]"
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis, recusandae!
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
              <div className="rounded-xl bg-white pr-4">
                <div className="flex h-full gap-4">
                  <figure className="w-1/2 h-full">
                    <img
                      src={GambarJualan}
                      alt="Gambar Jualan"
                      className="rounded-md h-full object-cover"
                    />
                  </figure>
                  <div className="w-1/2 flex flex-col h-full py-4">
                    <span className="">Toko</span>
                    <h5 className="font-bold mt-2">Botol Minum Keren</h5>
                    <p className="text-sm my-3 text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ea magnam modi officia quos vitae? Iusto.
                    </p>
                    <span className="font-bold mt-auto">Rp255.420</span>
                    <div className="my-2">
                      <Button className="rounded-full text-white border-none">
                        Lihat Produk
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div id="berita" className="bg-[#D5ED9F] mt-10 py-4 block sm:hidden">
          <h1 className="text-2xl pb-4 font-semibold text-center text-black">
            Berita
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 px-10">
            <div className="col-span-2 bg-white rounded-xl overflow-hidden">
              <figure className="overflow-hidden rounded-md">
                <img src={GambarNews} alt="Gambar 5" className="scale-110" />
              </figure>
              <div className="px-5">
                <h3 className="text-[20px] font-semibold mt-4 mb-2">
                  Pengelolaan Sampah Bersama UMKM
                </h3>
                <p className="text-sm text-justify">
                  Pengelolaan limbah sampah organik dan non organik...
                </p>
                <Button className="border-none h-[40px] text-white my-4 rounded-full">
                  Selengkapnya
                </Button>
              </div>
            </div>
            <div className="row-start-2 h-fit">
              <div className="relative rounded-[20px] overflow-hidden">
                <figure className="rounded-md overflow-hidden">
                  <img
                    className="rounded-tl-[20px]"
                    src={GambarNews2}
                    alt="Gambar 2"
                  />
                </figure>
                <div className="absolute top-0 left-0 bg-[#47a603] text-white px-3 py-1.5 rounded-tl-[20px] rounded-br-[20px] text-xs font-light">
                  Kegiatan
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[#1E4800] bg-opacity-50 rounded-md backdrop-blur-[1px] text-white p-2 m-2">
                  <h5 className="font-semibold">Bersih-Bersih Bersama</h5>
                </div>
              </div>
            </div>
            <div className="row-start-2 h-fit">
              <Box className="text-sm bg-[#47a603] h-44 rounded-xl p-4">
                Ayo berkontribusi untuk menjaga bumi kita agar hidup lebih
                sehat.
              </Box>
            </div>
            <div className="col-span-2 h-fit bg-white -mt-[15.8rem] rounded-xl">
              <div className="flex gap-4">
                <figure className="w-1/2">
                  <img
                    src={GambarJualan}
                    alt="Gambar Jualan"
                    className="rounded-md h-full object-cover"
                  />
                </figure>
                <div className="w-1/2 flex flex-col p-3">
                  <span className="">Toko</span>
                  <h5 className="font-semibold">Botol Minum Keren</h5>
                  <p className="text-sm my-2 text-justify">
                    "Botol Minum Keren" adalah botol stylish dari bahan...
                  </p>
                  <span className="font-bold mt-auto">Rp255.420</span>
                  <div className="">
                    <button className="rounded-full bg-[#47a603] text-white font-semibold px-3 py-2 text-xs mt-2">
                      Lihat Produk
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
