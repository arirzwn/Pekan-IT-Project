import gambar from "/src/assets/background-image.jpg";

export default function Aktifitas() {
  return (
    <>
      <div className="mt-10 grid grid-cols-3 gap-6 ">
        <figure className="col-span-4 uniform-size  ">
          <img src={gambar} />
        </figure>{" "}
        <figure className="col-span-2 uniform-size">
          <img src={gambar} />
        </figure>{" "}
        <figure className="uniform-size">
          <img src={gambar} />
        </figure>{" "}
        <figure className="uniform-size">
          <img src={gambar} />
        </figure>{" "}
        <figure className="uniform-size">
          <img src={gambar} />
        </figure>{" "}
        <figure className="uniform-size">
          <img src={gambar} />
        </figure>{" "}
        <figure className="uniform-size">
          <img src={gambar} />
        </figure>
      </div>
    </>
  );
}
