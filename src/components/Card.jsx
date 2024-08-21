export function Card({ gambar, className, teks, stylingText }) {
  return (
    <>
      <div className="relative bg-white rounded-[30px] overflow-hidden shadow-lg text-center">
        <img src={gambar} alt="Gambar 1" className={`${className}`} />
        <div className="absolute inset-0 flex items-end justify-center mb-10 px-3 ">
          <h3
            className={`highlight highlight-white highlight-variant-3 highlight-spread-xl text-xl font-medium  ${stylingText}`}
          >
            {teks}
          </h3>
        </div>
      </div>
    </>
  );
}
