import { formatCurrency } from "/src/utils/FormatCurrency.js";

import Header from "../../components/Component Donasi/Header.jsx";
import Step from "../../components/Component Donasi/Step.jsx";
import Button from "../../components/Button.jsx";
import logoKris from "/src/assets/logo-kris.svg";
import { LuWallet2 } from "react-icons/lu";
import { AiFillBank } from "react-icons/ai";

export default function DonationStepThree({
  handleNextStep,
  activeStep,
  selectedNominal,
  inputNominal,
}) {
  const nominal = selectedNominal || inputNominal;
  const formattedNominal = formatCurrency(nominal.replace(/\D/g, ""));

  return (
    <>
      <div className="flex pb-5 justify-between">
        <Header>Konfirmasi Donasi</Header>
        <Step activeStep={activeStep} />
      </div>
      <div className="flex w-full py-2 px-2 gap-4 !outline-none wrapper bg-[#DEF9C4] rounded-md border-2 border-[#47A603]">
        <Button className="flex-1 text-[#47A603] bg-transparent hover:bg-white focus:bg-white">
          <LuWallet2 className="text-3xl" />
        </Button>
        <Button className="flex-1 text-[#47A603] bg-transparent hover:bg-white hover:border-none focus:bg-white">
          <img src={logoKris} alt="Logo Kris" className="" />
        </Button>
        <Button className="flex-1 text-[#47A603] bg-transparent hover:bg-white hover:border-none focus:bg-white">
          <AiFillBank className="text-4xl" />
        </Button>
      </div>
      <Header className="py-4">Ringkasan Pembayaran</Header>

      <table className="table-auto rounded-md w-full p-4 bg-[#FFF9ED] text-sm">
        <tbody>
          <tr>
            <td className="border-l border-t border-b border-[#47A603] w-full p-2 rounded-tl-md">
              Nominal Donasi
            </td>
            <td className="border-r border-t border-b border-[#47A603] w-full p-2 rounded-tr-md">
              Rp{formattedNominal}
            </td>
          </tr>
        </tbody>
        <tbody className="font-semibold">
          <tr>
            <td className="border-l border-t border-b border-[#47A603] w-full p-2 rounded-bl-md">
              Total Pembayaran
            </td>
            <td className="border-r border-t border-b border-[#47A603] w-full p-2 rounded-br-md">
              Rp{formattedNominal}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-2">
        <span className="italic text-xs text-[#47A603BF] ">
          Dengan bertransaksi di SecondLife, Anda memahami dan menaati Syarat
          dan Ketentuan Layanan yang berlaku di SecondLife.
        </span>
      </div>
    </>
  );
}
