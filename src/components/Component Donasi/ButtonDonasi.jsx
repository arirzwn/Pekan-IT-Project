import Button from "../Button.jsx";

export default function ButtonDonasi() {
  return (
    <div className="flex w-full py-2 wrapper bg-[#DEF9C4]  rounded-md border-2 border-[#47A603]">
      <Button className="w-1/2 text-[#47A603] bg-transparent focus:bg-white hover:bg-transparent hover:border-none">
        Sekali
      </Button>
      <Button className="w-1/2 text-[#47A603] bg-transparent focus:bg-white hover:bg-transparent hover:border-none">
        Setiap bulan
      </Button>
    </div>
  );
}
