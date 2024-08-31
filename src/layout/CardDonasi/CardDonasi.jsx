import { useState } from "react";
import DonationStepOne from "./DonationStepOne.jsx";
import DonationStepTwo from "./DonationStepTwo.jsx";
import DonationStepThree from "./DonationStepThree.jsx";
import Button from "../../components/Button.jsx";
import Modal from "../../components/Component Donasi/Modal.jsx";
import Step from "../../components/Component Donasi/Step.jsx";

export default function CardDonasi() {
  const [next, setNext] = useState(0);
  const [selectedNominal, setSelectedNominal] = useState(null);
  const [inputNominal, setInputNominal] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [nominalError, setNominalError] = useState(false);

  const handleNext = () => {
    setFormSubmitted(true);
    if (next === 0 && !selectedNominal && !inputNominal) {
      setNominalError(true);
      return;
    }
    if (next === 1 && !formValid) {
      return;
    }
    if (next === 2) {
      showModal();
    } else {
      setNext(next + 1);
    }
  };

  const showModal = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const ShowStep = () => {
    if (next === 0) {
      return (
        <DonationStepOne
          handleNextStep={handleNext}
          activeStep={next}
          setSelectedNominal={setSelectedNominal}
          setInputNominal={setInputNominal}
          inputNominal={inputNominal}
          nominalError={nominalError}
        />
      );
    } else if (next === 1) {
      return (
        <DonationStepTwo
          setFormValid={setFormValid}
          formSubmitted={formSubmitted}
          activeStep={next}
        />
      );
    } else if (next === 2) {
      return (
        <DonationStepThree
          handleNextStep={handleNext}
          activeStep={next}
          selectedNominal={selectedNominal}
          inputNominal={inputNominal}
        />
      );
    }
  };

  return (
    <div className="">
      <div className=" h-[500px] border rounded-xl shadow-xl">
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full mx-10">
            {/*<Step activeStep={next} />*/}
            {ShowStep()}
            <Button className="w-full mt-5 text-white" onClick={handleNext}>
              {next === 2 ? "Konfirmasi" : "Selanjutnya"}
            </Button>
            <Modal />
          </div>
        </div>
      </div>
    </div>
  );
}
