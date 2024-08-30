import Button from "../Button.jsx";

const nominal = [
  { harga: "10.000" },
  { harga: "25.000" },
  { harga: "50.000" },
  { harga: "100.000" },
  { harga: "250.000" },
  { harga: "500.000" },
];

export default function ListNominal({
  onSelectNominal,
  selected,
  nominalError,
}) {
  return (
    <div className="mt-5 grid grid-cols-3 gap-1">
      {nominal.map((objHarga, index) => (
        <Button
          className={`bg-white text-[#47A603] border ${nominalError && !selected ? "border-red-600" : "border-[#47A603]"} hover:bg-[#DEF9C4] hover:outline-none hover:border-[#47A603] ${selected === objHarga.harga ? "bg-[#DEF9C4]" : ""}`}
          key={index}
          onClick={() => onSelectNominal(objHarga.harga)}
        >
          {objHarga.harga}
        </Button>
      ))}
    </div>
  );
}
