import { formatCurrency } from "/src/utils/FormatCurrency.js";

export default function Input({ nominalError, setInputNominal, inputNominal }) {
  const handleChange = (e) => {
    const formattedValue = formatCurrency(e.target.value.replace(/\D/g, ""));
    setInputNominal(formattedValue);
  };

  return (
    <div className="mt-5">
      <label
        className={`!outline-none border ${nominalError ? "border-red-600" : "border-[#47A603]"} input input-bordered flex items-center gap-2 text-[#47A603]`}
      >
        Rp.
        <input
          className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none placeholder:text-[#47A603] placeholder:opacity-70"
          type="text"
          name="nominal"
          placeholder="Masukan Nominal"
          value={inputNominal}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}
