import gambar1 from "/src/assets/gambar-1.png";
import gambar2 from "/src/assets/gambar-2.png";
import gambar3 from "/src/assets/gambar-3.png";
import gambar4 from "/src/assets/gambar-4.png";
import gambar5 from "/src/assets/gambar-5.png";
import gambar6 from "/src/assets/gambar-6.png";
import gambar7 from "/src/assets/gambar-7.png";

export default function Aktifitas() {
  return (
    <>
      <div>
        <h1 className="my-10 font-bold text-2xl text-center">Aktivitas Kami</h1>
      </div>
      <div className="  grid  grid-cols-4 grid-rows-3 mx-[70px] gap-3 ">
        <figure className="col-span-3 h-[200px] overflow-hidden rounded-md ">
          <img src={gambar1} className="" />
        </figure>
        <figure className="col-start-4 h-[200px]  rounded-md overflow-hidden">
          <img src={gambar2} className="scale-110" />
        </figure>
        <figure className="col-span-2 row-start-2 h-[200px]  rounded-md  overflow-hidden">
          <img src={gambar3} className="  " />
        </figure>
        <figure className="col-span-2 col-start-3 row-start -2 h-[200px]  rounded-md overflow-hidden">
          <img src={gambar4} className="  " />
        </figure>
        <figure className="row-start-3 h-[200px]  rounded-md overflow-hidden  ">
          <img src={gambar5} className="  " />
        </figure>
        <figure className="col-span-2 row-start-3 h-[200px]  rounded-md  overflow-hidden">
          <img src={gambar6} className="  " />
        </figure>
        <figure className="col-start-4 row-start-3 h-[200px ] rounded-md  overflow-hidden">
          <img src={gambar7} className="scale-110 " />
        </figure>
      </div>
    </>
  );
}
