import { useState } from "react";
import Header from "../../components/Component Donasi/Header.jsx";
import Step from "../../components/Component Donasi/Step.jsx";
import ButtonDonasi from "../../components/Component Donasi/ButtonDonasi.jsx";
import ListNominal from "../../components/Component Donasi/ListNominal.jsx";
import Input from "../../components/Component Donasi/Input.jsx";

export default function DonationStepOne({
  handleNextStep,
  activeStep,
  setSelectedNominal,
  setInputNominal,
  inputNominal,
  nominalError,
}) {
  const [selected, setSelected] = useState(null);

  const handleSelectNominal = (nominal) => {
    setSelected(nominal);
    setSelectedNominal(nominal);
  };

  return (
    <>
      <div className="flex pb-5 justify-between">
        <Header>Pilih Jumlah</Header>
        <Step activeStep={activeStep} />
      </div>
      <ButtonDonasi />
      <ListNominal
        onSelectNominal={handleSelectNominal}
        selected={selected}
        nominalError={nominalError}
      />
      <Input
        nominalError={nominalError}
        setInputNominal={setInputNominal}
        inputNominal={inputNominal}
      />
    </>
  );
}
