import GambarNews2 from "/src/assets/Gambar-News2.png";

export default function ActivityCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img
          className="w-full"
          src={GambarNews2}
          alt="People cleaning up in a forest"
        />
        <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Kegiatan
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Bersih-Bersih Bersama</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet consectetur. Urna dignissim duis placerat
          bibendum dignissim eu euismod.
        </p>
      </div>
    </div>
  );
}
