import Button from "../components/Button.jsx";
import Footer from "../layout/Footer/Footer.jsx"; // Impor komponen Footer

export default function Contact() {
  return (
    <>
      <section id="kontak" className=" ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#47A603] ">
            Hubungi Kami
          </h2>

          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-[#47a603] "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#47a603] bg-opacity-35 rounded-lg shadow-sm  placeholder:text-[#47a603] placeholder:opacity-50 border text-[#47a603] text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Email@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-[#47a603] "
              >
                Tentang
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-[#47a603] bg-opacity-35 rounded-lg shadow-sm  placeholder:text-[#47a603] placeholder:opacity-50"
                placeholder="Lingkugan"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-[#47a603]"
              >
                Pesan
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full  rounded-lg shadow-sm bg-[#47a603] bg-opacity-35 rounded-lg shadow-sm  placeholder:text-[#47a603] placeholder:opacity-50 border text-[#47a603] text-sm  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="Tinggalkan pesan..."
              ></textarea>
            </div>
            <Button className="text-white">Kirim pesan</Button>
          </form>
        </div>
      </section>
      <Footer /> {/* Tambahkan komponen Footer */}
    </>
  );
}
