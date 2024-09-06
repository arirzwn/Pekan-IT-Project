export default function TeksDonasi() {
  return (
    <>
      {/*  Desktop */}
      <div className="hidden xl:block w-1/2">
        <h1 className="text-4xl font-semibold text-[#47A603] leading-snug">
          Setiap Rupiah <br /> untuk Lingkungan
        </h1>
        <p className="leading-7">
          Setiap rupiah yang Anda sumbangkan membantu kami melindungi dan
          melestarikan alam. Dengan dukungan Anda, kami dapat menjalankan
          berbagai program lingkungan yang berdampak nyata. <br /> <br />{" "}
          Kontribusi Anda, sekecil apapun, memberikan harapan bagi bumi dan
          generasi mendatang. Mari bersama-sama berbuat baik untuk planet kita.{" "}
          <br /> <br /> Donasi sekarang dan jadilah bagian dari perubahan
          positif untuk lingkungan!
        </p>
      </div>

      {/*  Mobile */}
      <div className="block xl:hidden mt-10 mb-5">
        <h1 className="font-semibold text-[#47A603] text-xl">
          Setiap Rupiah <br /> untuk Lingkungan
        </h1>
        <p className="text-sm">
          Setiap rupiah yang Anda sumbangkan membantu kami melindungi dan
          melestarikan alam. Dengan dukungan Anda, kami dapat menjalankan
          berbagai program lingkungan yang berdampak nyata. <br /> <br />
          Kontribusi Anda, sekecil apapun, memberikan harapan bagi bumi dan
          generasi mendatang. Mari bersama-sama berbuat baik untuk planet kita.{" "}
          <br /> <br /> Donasi sekarang dan jadilah bagian dari perubahan
          positif untuk lingkungan!
        </p>
      </div>
    </>
  );
}
